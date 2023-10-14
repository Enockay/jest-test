
//create a object
const analyzeItem = {
    sumArray(arr){
       let sum = arr.reduce((current,prev)=> prev + current,0);
       return sum;
        },
    
    midOfArray(arr){
        let midArray = Math.floor(arr.length/2)
        return arr[midArray];
    },
    minimumItem(arr){
        let min = arr.reduce((current,prev) => {
            if(prev < current){
            return prev;
            }else{
                return current
            }
        },arr[0]);
        return min;
    },
    average(arr){
        let mean = arr.reduce((current,prev)=>current + prev,0);
        return mean/arr.length;
    },
    maximum(arr){
        let max = arr.reduce((current,prev)=>{
            if(current > prev){
                return current;
            }else{
                return prev
            }
        },arr[0]);
        return max;
    }
}

module.exports = analyzeItem;