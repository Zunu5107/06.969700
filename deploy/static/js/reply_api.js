
function getcomments() {
    fetch('/juns/comment').then((res) => res.json()).then((data) => {
        let datas = data["result"];
        $("#comment_line").empty();
        datas.forEach(c => {
            let temp_html =
                `
            <div class="cmt">
						<p class="commnets">${c["comment"]}</p>
						<p class="nickname"> - ${c["name"]} - </p>
					</div>
            `;

            $("#comment_line").append(temp_html);
        });
    })
}

function reply_post() {

    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');

    id = document.getElementById("replyId").value;
    msg = document.getElementById("replyMessage").value;

    let formData = new FormData();

    formData.append("id_give", id);
    formData.append("msg_give", msg);

    fetch('/juns/comment', { method: "POST", body: formData, }).then((res) => res.json()).then((data) => {
        getcomments();
    });
}

function modal_close() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
}
