document.getElementById('totalCalculate').addEventListener('click', function(){
    console.log('hello bangladesh')
    
    const incomeTo = getinputValue('incomeTo')

    const foodEx = getinputValue('foodEx')

    const rentEx = getinputValue('rentEx')
    const clothesEx = getinputValue('clothesEx')

    const totalCost =  foodEx + rentEx  + clothesEx
    console.log(totalCost)
    const totalExpenseBl = document.getElementById('totalExpense')
    totalExpenseBl.innerText = totalCost
    
    const thenExBl = document.getElementById('thenExBl')
    const minasValue = document.getElementById('minasValue')
    if(incomeTo > totalCost){
        const totalExpense = incomeTo - totalCost
        console.log(totalExpense)
        thenExBl.innerText = totalExpense
        minasValue.innerText = ''
       
    }
    else{
        const totalExpense = incomeTo - totalCost
        minasValue.innerText = 'Cost is higher than income = ' +  totalExpense
        thenExBl.innerText = ''
    }

    

})
//input value function
function getinputValue(id){
    const inputV = document.getElementById(id)
    const inputValue = parseInt(inputV.value)

    if(inputValue >= 0 ){
        return inputValue
    }

    return alert('Please Enter positive Number and not String')
   
}

//input text function



//save balance

document.getElementById('TwentySave').addEventListener('click', function(){
    console.log('hello bangladesh')

    const incomeTotal = getinputValue('incomeTo')
    const thenExbls = document.getElementById('thenExBl')

 
    const TotalSaveAmount = (incomeTotal * 20) / 100
    

    document.getElementById('saveBalance').innerText = TotalSaveAmount

    if(thenExbls.innerText > TotalSaveAmount){

        const remaingBalance = thenExbls.innerText - TotalSaveAmount
         document.getElementById('remaingBalance').innerText =parseInt(remaingBalance) 
         document.getElementById('remaingBalance').style.color = "black"
        }

    else{
        document.getElementById('remaingBalance').style.color = "red"
        document.getElementById('remaingBalance').innerText = 'There is not enough money to save'
    }
    
    

    
    
})