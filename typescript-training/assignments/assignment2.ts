function evaluateLoan(
customerName: string,
creditScore: number,
income: number,
isEmployeed: boolean,
debtToIncomeRatio: number
): void{
//To display initial message
    console.log("Loan Evaluation Result for: " +customerName);

//Step1: To check credit score
if (creditScore > 750){
    //if credit scrore is above 750, approve loan
    console.log("Loan is approved");
    } else if(creditScore >= 650){
        //If creditscore is between 750 and 650, further checks needed
        //Step2: Check income
        if(income >= 50000){
            //If income is at least $50000, check the employee status
            if(isEmployeed){
                //Step3: Check debt-income ratio
                if(debtToIncomeRatio < 40.0){
                    //If DTI ratio is less than 40%, approve the loan
                    console.log("Loan Approved");
                
                } else{
                    //If DTI is greater, deny the loan
                    console.log("Loan Denied coz of DTI");
                }
            }else{
                console.log("Loan Denied not employeed");
            }
        } else{
            console.log("Loan Denied no income");
        }
    } else{
        console.log("Loan Denied less credit score");
    }


}
    

evaluateLoan(
    "John",
    720,
    100000,
    true,
    30.0

);