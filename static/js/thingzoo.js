$(document).ready(function () {
    show_comment();
});

function save_comment() {
    let name = $('#name').val()
    let comment = $('#comment').val()

    let formData = new FormData();
    formData.append("name_give", name);
    formData.append("comment_give", comment);

    fetch('/thingzoo/guestbook', { method: "POST", body: formData, }).then((res) => res.json()).then((data) => {
        //console.log(data)
        alert(data["msg"]);
        window.location.reload()
    });
}

function show_comment() {
    fetch('/thingzoo/guestbook').then((res) => res.json()).then((data) => {
        let rows = data['result']
        $('#comment-list').empty()
        for (let i = 0; i < rows.length; i+=3) {
            let temp_html = `<div class="row mt-2"></div>`
            $('#comment-list').append(temp_html)
            
            if (i + 3 > rows.length) {
                end = rows.length
            } else {
                end = i + 3
            }
            for (let j = i; j < end; j+=1) {
                const e = rows[j];

                let comment = e['comment']
                let name = e['name']
                let temp_html = `<div class="card col mx-2">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${comment}</p>
                                            <footer class="blockquote-footer">${name}</footer>
                                        </blockquote>
                                    </div>
                                </div>`
                $("#comment-list > .row").last().append(temp_html)
            }
        }
    })
}