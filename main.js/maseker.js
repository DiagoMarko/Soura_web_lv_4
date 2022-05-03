//---------Set_Variables_Start----------------->
let form     = document.querySelector('form');
let massgae  = document.querySelector('.massgae');
let text     = document.querySelector('#text');
let robot1   = document.querySelector('.fa-commenting');
let robot2   = document.querySelector('.narot');
let bootchat = document.querySelector('.bootchat');
let rocket   = document.querySelector('.rocket-up');
let contact  = document.querySelector('#contact');
let close_massge_sm_media = document.querySelector('.close_massge_sm_media');
//---------Set_Variables_End----------------->


//--------------  Boot || Chat || Function || Start ------------------->\


//--------- Form || Submit || BootChat || Function ||Start   -------->
form.addEventListener('submit',bootChat);

function bootChat(e)
{
    e.preventDefault();
    //-------- Delet || Prevent || Dafualt || Event --------->

    //--------- Loop || In || Data ||Start   -------->
    let smartText = text.value.trim().toLowerCase();

    if(text.value == '')
    {
        false;
    }else
    {
        massgae.insertAdjacentHTML('beforeend',`<p class = "massge">${smartText}</p>`);
        massgae.insertAdjacentHTML('beforeend',
        `
            <div class="animated_parent">
                <div class="animated_mess">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `        
        );
        //--------------- To || Delet || Animate || After || Send || Messages  -------------------->
        let animated_parent = document.querySelector('.animated_parent');
        //--------------- To || Delet || Animate || After || Send || Messages  -------------------->

        if(smartText == 'yes' || smartText == 'Yes')
        {
            setTimeout(() => {
                animated_parent.remove();
                massgae.insertAdjacentHTML('beforeend',
                `
                <div class="datas_container">
                    <input type="text"  class = "inp_mass_user_name" placeholder="User Name">
                    <input type="text"  class = "inp_mass_email" placeholder="E-mail">
                    <button class="send_data">Send</button>
                </div>
                `
                )
                let send_data           = document.querySelector('.send_data');
                let inp_mass_user_name  = document.querySelector('.inp_mass_user_name');
                let inp_mass_email      = document.querySelector('.inp_mass_email');
                send_data.addEventListener('click',() => {
                    if(inp_mass_email.value.indexOf('@') == -1 || inp_mass_email.value.indexOf('.') == -1 || inp_mass_email.value.length < 10)
                    {
                        alert('Please Enter Right Value With "@" and "."')

                    }else if(inp_mass_email.value != '' && inp_mass_user_name.value != '')
                    {
                        setTimeout(() => {
                            //-------- To || Clear || Input || Value  ------------->
                            inp_mass_email.value = '';
                            inp_mass_user_name.value = '';
                            massgae.insertAdjacentHTML('beforeend',`<p class = "massge">Thank You We Will Contact With You Soon GoodBye <i class="fa fa-smile-o"></i></p>`);
                            animated_parent.remove();
                        },3000) 
                        console.log(inp_mass_email.value.indexOf('@'))
                    }else
                    {
                        alert('Please Enter Right Value')
                    }
                })
            },3000)

        }else if(smartText == "no" || smartText == "No")
        {
            setTimeout(() => {
                animated_parent.remove();
                massgae.insertAdjacentHTML('beforeend',`<p class = "massge">It was a pleasure doing business with you, best regards <i class="fa fa-smile-o"></i></p>`);
            },3000)
        }else
        {
            setTimeout(() => {
                animated_parent.remove();
                massgae.insertAdjacentHTML('beforeend',`<p class = "massge">We Will Contact With You As Soon As Possible We Will Send You From Now To Apply Your Data To Contact With You If You Want That Please Send Yes Or No If You Dont</p>`);
            },3000)
        }
        //-------- To || Clear || Input || Value  ------------->
        text.value = '';
    }

//--------- Form || Submit || BootChat || Function || End   -------->

}

//--------------  Boot || Chat || Function || End ------------------->

//------------------ Events || Start  ------------------>
robot1.addEventListener('click',addMove_Contact_Mess)
function addMove_Contact_Mess(){
    bootchat.classList.add('bootchat-show');
    robot1.style.display = "none";
    robot2.style.display = "block";
}//------- Show || Boot || Chat ---->

robot2.addEventListener('click',hidde_content_Mess)

function hidde_content_Mess(){
    bootchat.classList.remove('bootchat-show');
    robot2.style.display = "none";
    robot1.style.display = "block";
}//------- Hidde || Boot || Chat ---->

contact.addEventListener('click',() => {
    addMove_Contact_Mess();
})//------- Show || Boot || Chat ---->
close_massge_sm_media.addEventListener('click',() => {
    hidde_content_Mess();
})//------- Hidde || Boot || Chat ---->

rocket.addEventListener('click',function(){
  let up = document.querySelector('#up');
   up.scrollIntoView({block:"start"})
})//------- Up || Scroll ||Rooket---->

window.onscroll = function(){
    if(window.scrollY > 200){
        rocket.style.display = "block";
    }else{
        rocket.style.display = "none";
    }
} //------- Up || Scroll ||Rooket || Hidde ---->

//------------------ Events || End  ------------------>
