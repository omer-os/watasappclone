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

