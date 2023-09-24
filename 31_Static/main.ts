class MathOperations{
    public static PI:number = Math.PI
    public static avgOfThree(num1:number,num2:number, num3:number):number{
        return (num1+num2+num3)/3
    }
}
console.log(MathOperations.PI*1000)
console.log(MathOperations.avgOfThree(2,3,4))