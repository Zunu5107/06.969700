
function getcomments() {
    fetch('/juns/comment').then((res) => res.json()).then((data) => {
        let datas = data["result"];
        $("#comment_line").empty();
        datas.forEach(c => {
            let temp_html =
                `
            <div class="card">
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${c["comment"]}</p>
                        <footer class="blockquote-footer">${c["name"]}</footer>
                    </blockquote>
                </div>
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
