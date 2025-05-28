// Polyfill para MessageChannel en Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  class MessagePort {
    constructor() {
      this.onmessage = null;
      this._listeners = new Set();
    }

    addEventListener(type, listener) {
      if (type === 'message') {
        this._listeners.add(listener);
      }
    }

    removeEventListener(type, listener) {
      if (type === 'message') {
        this._listeners.delete(listener);
      }
    }

    dispatchEvent(event) {
      if (this.onmessage) {
        this.onmessage(event);
      }
      for (const listener of this._listeners) {
        listener(event);
      }
      return true;
    }

    postMessage(message) {
      if (this._otherPort) {
        const event = new MessageEvent('message', { data: message });
        setTimeout(() => {
          this._otherPort.dispatchEvent(event);
        }, 0);
      }
    }

    start() {}
    close() {}
  }

  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      const port1 = new MessagePort();
      const port2 = new MessagePort();
      
      port1._otherPort = port2;
      port2._otherPort = port1;
      
      this.port1 = port1;
      this.port2 = port2;
    }
  };

  if (typeof MessageEvent === 'undefined') {
    globalThis.MessageEvent = class MessageEvent {
      constructor(type, options = {}) {
        this.type = type;
        this.data = options.data;
        this.target = null;
        this.currentTarget = null;
      }
    };
  }
}

export default MessageChannel; 