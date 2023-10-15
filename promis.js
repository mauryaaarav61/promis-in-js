// const promisONE = new Promise((resolve,reject)=>{
//     setTimeout(() => {
       
//         let error = false;
//         if (!error){
//             resolve({username:"Aarav",password:123})
//         }else{
//             reject('ERROR: not found')
//         }
        
//     },2000);
// })

//  promisONE.then((user)=>{
//      console.log(user);
//      return user.password
//  }).then((password)=>{
//     console.log(password);
//  }).catch((eror)=>{
//     console.log(eror);
//  }).finally(()=>{
//     console.log('always print');
//  })



//const promisONE = new Promise((resolve,reject)=>{
    //setTimeout(() => {
       
        //let error = false;
        //if (!error){
           // resolve({username:"Aarav",password:123})
        //}else{
            //reject('ERROR: not found')
        //}
        
   // },2000);
//})

//async function promisONEee() {
    //const response = await promisONE
    //console.log(response);                 ///  Async does not shows Error...  ///
//}

//promisONEee();

//FOR ACCES OF ERRR ......

const AsyncPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        let eror = true;
        if (!eror) {
            resolve({username:"Aarav",password:1234,email:"mauryaaarav61@gmail.com"});
        }else{
            reject('Error: 404 not found');
        }
    }, 2000);
})

async function promisAsync() {
    try {
        const response = await AsyncPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

promisAsync()
