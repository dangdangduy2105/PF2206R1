class Mobile{
    constructor(){
      this.baterry = 100;
      this.draft = [];
      this.inbox = [];
      this.sent = [];
    }
  
    checkStatus(){
      return this.baterry > 0;
    }
  
    charge(){
      this.baterry = 100;
    }
  
    writeMessage(mess){
      this.draft = mess;
      this.baterry--;
    }
  
    sentMessage(mobile){
      let draft = this.draft;
      mobile.inbox.push(draft);
      this.draft = "";
      this.baterry--;
    }
  }
  
  // - thuộc tính:
  // + battery: int;
  // + Draft: array;
  // + Inbox: array;
  // + Sent: array;
  
  // - phương thức:
  // + CheckStatus(): boolean;
  // + turnOnOff: void;
  // + charge(): void;
  // + writeMessage(string mess): void;
  // + sent(mobile);