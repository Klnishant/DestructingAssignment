function extractNameStreet(object){
    const{name,adress:{street}}=object;
    return{name,street};
}

const person={
    name:"Mithun",
    age:21,
    adress:{
        street:"B8, Block B, Industrial Area",
        city:"Sector 62, Noida",
        state:"Uttar Pardesh",
    },
};

const extractedData=extractNameStreet(person);
console.log("Extracted Data:",extractedData);