//Write an asynchronous function that accepts a message string 
//and a delay time in milliseconds. The function should log the message to the console after 
//the specified delay time.


async function  healthStatus(message,delay){
    await new Promise((resolve, reject) => {
        console.log({message});

        setTimeout(delay);
    })

};

healthStatus("You dont not have a flu",1000)

//You have an array of user IDs and a function getUserData(id) that returns 
//a Promise with user data when given a user ID. Write an asynchronous function 
//that fetches and logs the data for each user ID one by one, in sequence.

async function getUserData(id){
    for(item of id){
        try{
            const userId = await getUserData(item);
            console.log({userId});
        }
        catch{
            console.log(`Failed to fetch data for user ID ${item}`)
        }
    }
};
const id =[3,4,5,6,7,8,9];
getUserData(id);

//You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success message if the task is successful,
// and a custom error message if there's an error.
  
 async function printPerformTask(){
    printPerformTask()
    .then((response) => {
        console.log('Task done successfully'); 
        })
    .catch((error) =>{
        console.log('An error occurred',error);
    })
}
printPerformTask();


//Question 4

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random(); 
      if (randomNumber > failureProbability) {
        resolve(`Success Task ${taskName} completed.`);
      } else {
        reject(`Failure Task ${taskName} failed.`);
      }
    });
  }
  
  function executeWithRetry(taskName, retries, failureProbability) {
    let attempts = 0;
    let success = false;
  
    while (attempts < retries) {
      unstableTask(taskName, failureProbability)
       .then(() => {
          success = true;
          
        })
       .catch(() => {
          attempts++;
        });
    }
  
    if (success) {
      console.log('Task succeeded after all attempts.');
    } else {
      console.log('Task failed after all attempts.');
    }
  }
  
  executeWithRetry("SampleTask",3,0.5);

  