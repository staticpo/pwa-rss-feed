const getConfig = () => {
  if(self.IndexedDB){
    //console.log('IndexedDB is supported');
  }
  if(window.IndexedDB){
    //console.log('IndexedDB is supported 2');
  }
  //console.log('Borrar esto luego');
};

export default getConfig;
