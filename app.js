// show settings
$('.settingsContainer').hide('slow')
$('.threeDots').click(()=>{
    $('.settingsContainer').toggle('slow')
})
const allSettings={
    userName : prompt('enter your name : '),
    userPassword : prompt('enter your password'),
    profileColor : 'dark',
    appTheme : 'dark',
    autoScrollOption : true,
    LimitCommingData : true
}





const emojies = "๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ฅฒ โบ๏ธ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คช ๐คจ ๐ง ๐ค ๐ ๐ฅธ ๐คฉ ๐ฅณ ๐ ๐ ๐ ๐ ๐ ๐ ๐ โน๏ธ ๐ฃ ๐ ๐ซ ๐ฉ ๐ฅบ ๐ข ๐ญ ๐ค ๐  ๐ก ๐คฌ ๐คฏ ๐ณ ๐ฅต ๐ฅถ ๐ฑ ๐จ ๐ฐ ๐ฅ ๐ ๐ค ๐ค ๐คญ ๐คซ ๐คฅ ๐ถ ๐ ๐ ๐ฌ ๐ ๐ฏ ๐ฆ ๐ง ๐ฎ ๐ฒ ๐ฅฑ ๐ด ๐คค ๐ช ๐ต ๐ค ๐ฅด ๐คข ๐คฎ ๐คง ๐ท ๐ค ๐ค ๐ค ๐ค  ๐ ๐ฟ ๐น ๐บ ๐คก ๐ฉ ๐ ๐ค ๐ โ ๐ ๐ ๐ค ๐ค โ๏ธ ๐ค ๐ค ๐ค ๐ค ๐ ๐ ๐ ๐ ๐ โ๏ธ ๐ ๐ โ ๐ ๐ค ๐ค ๐ ๐ ๐ ๐คฒ  ๐ป ๐ โ ๏ธ ๐ฝ ๐พ ๐ค ๐ ๐บ ๐ธ ๐น ๐ป ๐ผ ๐ฝ ๐ ๐ฟ ๐พ".split(' ')
var str_emojies = ""
for (emoji of emojies){
    str_emojies+=`<div onclick="stickerAdd(this)">${emoji}</div>`
}
$('.stickersContainer').html(str_emojies).hide()
$('.sticker').click(()=>{
    $('.stickersContainer').toggle("slow");
})
function stickerAdd(id){
    let text = $('.msgInput').val()+id.innerHTML
    $('.msgInput').val(text)
}

$('.soundRecoring').hide()


$(".microphone").on('touchstart mousedown', function(e) {
    $('.soundRecoring').show("fast")
    e.preventDefault();
})

$(".microphone").on('touchend mouseup', function(e) {
    $('.soundRecoring').hide("fast")
    e.preventDefault();
})




db.ref('chats').on('child_added',(msg)=>{
    console.log(msg.val());

    if(msg.val().name==allSettings.userName && msg.val().userPassword==allSettings.userPassword){
        $('.messegesContainer').append(`
            <div class="mymsg">
            <div class="msgBottom">
                <div class="msgContent">${msg.val().text}</div>
                <div class="mytringle"></div>
            </div>
            <div class="msgDate">${msg.val().date}</div>
        </div>
    `)}
    else{
        $('.messegesContainer').append(`
            <div class="msg">
            <div class="masgTop">${msg.val().name}</div>
            <div class="msgBottom">
                <div class="msgContent">${msg.val().text}</div>
                <div class="tringle"></div>
            </div>
            <div class="msgDate">${msg.val().date}</div>
        </div>
    `)
    }

        
    const lastElement = document.querySelector('.messegesContainer')
    lastElement.scrollTop = lastElement.scrollHeight;})




$('.msgInput').keyup((a)=>{
    if($('.msgInput').val().length>=2){
        if(a.key=="Enter"){
            db.ref('chats').push({
                name : allSettings.userName,
                text : $('.msgInput').val().replace(/(<([^>]+)>)/gi, ""),
                date : new Date().toLocaleDateString(),
                userPassword : allSettings.userPassword
            })
            $('.msgInput').val('')
        }
    }
})