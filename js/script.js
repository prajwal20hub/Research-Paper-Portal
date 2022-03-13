// function addPub(){
//     let target = document.getElementById('Pubs');
//     target.innerHTML += Publications.Pub1.Name;
//     console.log(this);
// }



const Journals = [
    {
        "Faculties":["Dipak Wajgi","Ujwalla Gawande","Rakhi Wajgi"],
        "PubTitle" : "Review of Localization Approaches in Wireless Sensor Networks",
        "PubName" : "International Journal of Advanced Science and Technology",
        "ISSNnPP" : "7164-7182",
        "MnY" : " May-June 2020"
    },
    {
        "Faculties":["Sandip Kakde", "Shailesh Kamble", "Lalit Damahe", "Shailendra Badwaik"],
        "PubTitle" : "Performance Analysis of Combinatorial Circuits using Complementary and Pseudo NMOS",
        "PubName" : "Test Engineering and Management Journal",
        "ISSNnPP" : "2058-2063",
        "MnY" : "Mar-Apr 2020"
    },
    {
        "Faculties":["A. Yadav", "S. Kakde", "A. Khobragade"," D. Bhoyar"," S. Kamble" ],
        "PubTitle" : "LDPC Decoder’s Error Performance over AWGN Channel using Min-Sum Algorithm",
        "PubName" : "International Journal of Pure and Applied Mathematics, Vol: 118",
        "ISSNnPP" : "3875-3879",
        "MnY" : "Year 2018"
    }
]

const Conferences =[
    {
        "Faculties":["Nikhil Mangrulkar" , "Ninad Deshmukh", "Maitree Gawande", "Shivani Pande", "Dhvani Kothari" ],
        "TopicName" : "Monitoring Logistics Through Blockchain",
        "EventName" : "International Conference on Advancements in Computing & Management (ICACM-2019)",
        "Location" : "JaganNath University, Jaipur, India",
        "MnY" : "April 13-14, 2019"
    },
    {
        "Faculties":["S. Zade"," N. Sambhe", "S. Kamble"," V. Palekar"],
        "TopicName" : "Review on Improving Lifetime of Network Using Energy And Density Control Cluster Algorithm",
        "EventName" : "2018 IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS)",
        "Location" : "Bhopal, India",
        "MnY" : "Year 2018"
    }
]

function closeAddPubs(){
    let target = document.getElementById('AddPubs');
    target.style.display = "none";
    document.getElementById('Journal-form').reset();
}

function addPub(){
    console.log("Here");
    let target = document.getElementById('AddPubs');
    target.style.display = "block";
    // console.log(this);
}

// /*---------- Overlay forms ---------- */

const jBtn = document.getElementById('jBtn');
jBtn.addEventListener("click", ()=>{
    let htarget = document.getElementById('Journal-form');
    let vtarget = document.getElementById('Conference-form');
    vtarget.style.display = "none";
    htarget.style.display = "block";
})

const cBtn = document.getElementById('cBtn');
cBtn.addEventListener("click", ()=>{
    console.log("hello");
    let vtarget = document.getElementById('Journal-form');
    let htarget = document.getElementById('Conference-form');
    vtarget.style.display = "none";
    htarget.style.display = "block";
})

// Journal form 

const jForm = document.getElementById('jrnl-sbmt-btn');

// jForm.addEventListener("click" , ()=>{
const addToJournal = ()=>{

    let obj = {};
    obj.Faculties = document.getElementById('jrnl-fname').value.split(',');
    console.log(obj.Faculties);
    obj.PubTitle = document.getElementById('jrnl-ptitle').value;
    obj.PubName = document.getElementById('jrnl-pname').value;
    obj.ISSNnPP = document.getElementById('jrnl-ISSN').value;
    obj.MnY = document.getElementById('jrnl-MnY').value;
    Journals.push(obj);
    console.log(Journals);
    closeAddPubs();
    JouPrintfn();
}

const JouPrintfn = () =>{
    var Jou = document.getElementById('Jou');
    var frag = document.getElementById('Journals');
    Jou.innerHTML = '';
    Journals.forEach(e => {
        let instance = frag.content.cloneNode(true);
        let faculty = e.Faculties.join(", ");
        instance.querySelector('.fName').innerHTML= faculty ;
        instance.querySelector('.PubTitle').innerHTML= e.PubTitle ;
        instance.querySelector('.Publication_Name').innerHTML= e.PubName ;
        instance.querySelector('.ISSNnPP').innerHTML= e.ISSNnPP ;
        instance.querySelector('.MnY').innerHTML= e.MnY ;
        Jou.appendChild(instance);
        console.log(instance);
    })
    // console.log(Journals);
}

const DeleteJournal= (el) => {
    console.log($(el))
    Journals.splice($(el).parent().parent().index(), 1);// delete 1 element from the object 
    // $(el).parent().parent().remove();
    JouPrintfn();
};

var ind ;
const EditJournal = (el) =>{
    $('#EduJou').css("display","block");
    ind =$(el).parent().parent().index();
    let indVal = Journals[$(el).parent().parent().index()];
    let faculty = indVal.Faculties.join(", ");
    console.log(faculty);
    $('#jrnl-fname1').val(faculty);
    $('#jrnl-ptitle1').val(indVal.PubTitle);
    $('#jrnl-pname1').val(indVal.PubName);
    $('#jrnl-ISSN1').val(indVal.ISSNnPP);
    $('#jrnl-MnY1').val(indVal.MnY);
}

const saveToJournal = (el) =>{
    console.log(ind);
    let indVal = Journals[ind];
    // let indVal = Journals[$(el).parent().parent().index()];
    indVal.Faculties =  $('#jrnl-fname1').val().split(',');
    indVal.PubTitle = $('#jrnl-ptitle1').val();
    indVal.PubName = $('#jrnl-pname1').val();
    indVal.ISSNnPP = $('#jrnl-ISSN1').val();
    indVal.MnY = $('#jrnl-MnY1').val();
    document.getElementById('Journal-form').reset();   
    $('#EduJou').css("display","none");
    console.log("Journal Details Edited");
    JouPrintfn();
}

// Conference Form 
const cForm = document.getElementById('cnf-sbmt-btn');

// jForm.addEventListener("click" , ()=>{
const addToConference = ()=>{
    closeAddPubs();
    let obj = {};
    console.log(obj);
    obj.Faculties = document.getElementById('conf-fname').value.split(',');
    obj.TopicName = document.getElementById('conf-title').value;
    obj.EventName = document.getElementById('conf-name').value;
    obj.Location = document.getElementById('conf-Location').value;
    obj.MnY = document.getElementById('conf-MnY').value;
    document.getElementById('Conference-form').reset();
    Conferences.push(obj);
    console.log(obj);
    ConfPrintfn();
}

const ConfPrintfn = () =>{
    var Conf = document.getElementById('Conf');
    var frag = document.getElementById('Conference');
    Conf.innerHTML = '';
    Conferences.forEach(e => {
        let instance = frag.content.cloneNode(true);
        let faculty = e.Faculties.join(", ");
        instance.querySelector('.fName').innerHTML= faculty ;
        instance.querySelector('.TopicName').innerHTML= e.TopicName ;
        instance.querySelector('.Event_Name').innerHTML= e.EventName ;
        instance.querySelector('.Location').innerHTML= e.Location ;
        instance.querySelector('.MnY').innerHTML= e.MnY ;
        Conf.appendChild(instance);
        console.log(instance);
    })
    // console.log(Journals);
}

const DeleteConf= (el) => {
    console.log($(el))
    Conferences.splice($(el).parent().parent().index(), 1); //delets 1 element from object
    // $(el).parent().parent().remove();//delets 1 element from the page 
    ConfPrintfn();
};

var indc ;
const EditConf = (el) =>{
    $('#EduConf').css("display","block");
    indc =$(el).parent().parent().index();
    let indVal = Conferences[$(el).parent().parent().index()];
    let faculty = indVal.Faculties.join(", ");
    console.log(faculty);
    $('#conf-fname1').val(faculty);
    $('#conf-ptitle1').val(indVal.TopicName);
    $('#conf-pname1').val(indVal.EventName);
    $('#conf-ISSN1').val(indVal.Location);
    $('#conf-MnY1').val(indVal.MnY);
}

const saveToConference = (el) =>{
    console.log(indc);
    let indVal = Conferences[indc];
    // let indVal = Journals[$(el).parent().parent().index()];
    indVal.Faculties =  $('#conf-fname1').val().split(',');
    indVal.TopicName = $('#conf-ptitle1').val();
    indVal.EventName = $('#conf-pname1').val();
    indVal.Location = $('#conf-ISSN1').val();
    indVal.MnY = $('#conf-MnY1').val();
    document.getElementById('Conference-form').reset();   
    $('#EduConf').css("display","none");
    console.log("Conference Details Edited");
    ConfPrintfn();
}



window.onload =()=> {
    JouPrintfn();
    ConfPrintfn();
};