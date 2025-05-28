// Polyfill para MessageChannel
class MessagePort {
  constructor() {
    this.onmessage = null;
    this._otherPort = null;
  }

  postMessage(message) {
    if (this._otherPort && this._otherPort.onmessage) {
      const event = { data: message };
      setTimeout(() => {
        this._otherPort.onmessage(event);
      }, 0);
    }
  }

  start() {}
  close() {}
}

if (typeof MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      this.port1 = new MessagePort();
      this.port2 = new MessagePort();
      
      // Conectar los puertos
      this.port1._otherPort = this.port2;
      this.port2._otherPort = this.port1;
    }
  };
}

export default MessageChannel; 