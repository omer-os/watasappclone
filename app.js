const userName = "omar"
const userPassword = "12345"



const emojies = "😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲  👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾".split(' ')
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

    if(msg.val().name==userName && msg.val().userPassword==userPassword){
        $('.messegesContainer').append(`
            <div class="mymsg">
            <div class="masgTop">${msg.val().name}</div>
            <div class="msgBottom">
                <div class="msgContent">${msg.val().text}</div>
                <div class="mytringle"></div>
            </div>
            <div class="msgDate">${msg.val().date}</div>
        </div>
    `)
    }
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
    if(a.key=="Enter"){
        db.ref('chats').push({
            name : userName,
            text : $('.msgInput').val(),
            date : new Date().toLocaleDateString(),
            userPassword : userPassword
        })
        $('.msgInput').val('')
    }
})