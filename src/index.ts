export const bgRed400 = () => ({backgroundColor: 'rgb(248 113 113)'})


const allCommands = [
    {
      name: 'w', 
      func: (x: any) => ({width: x})
    },
    {
      name: 'h', 
      func: (x: any) => ({height: x})
    },
    {
      name: 'bg', 
      func: (x: any) => ({backgroundColor: x})
    },
    {
      name: 'justify', 
      func: (x: any) => ({justify: x})
    },
    {
      name: 'border', 
      func: (x: any = 1) => ({borderWidth: x})
    },
    {
      name: 'borderRed', 
      func: () => ({borderColor: 'red'})
    }
  ]
  
  
  
  class RNOssomClass {
    s: any
    constructor(initialStyle: any){
      const self: any = this
  
      this.s = null
  
      self.__proto__.addstyle = (addedStyle: any) => {

        console.log(self, "--1--", addedStyle)
        
        self.s = {...self.s, ...addedStyle}

        console.log(self, "--2--")

        return self
      }
  
      self.__proto__.addstyle(initialStyle);
  
      allCommands.forEach((item: any) => {
          self.__proto__[item.name] = (pass: any) => {
            if(pass !== undefined) self.__proto__.addstyle(item.func(pass));
            return self;
          };
        });
    }
  }
  
  const RNOss: any = RNOssomClass
  const _: any = {}
  
  
  
  
  
  
  allCommands.forEach((command: any) => {
    _[command.name] = (...pass: any) => new RNOss(command.func(...pass));
  });
  _.__ = () => new RNOss({})
  _._ = (style: any) => new RNOss(style)

  export default _ 