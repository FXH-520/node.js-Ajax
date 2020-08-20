myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应都完毕了')
            if (request.status >= 200 && request.status < 300) {
                console.log('说明请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合 JSON 语法的字符串
                //转化成 Js 对应的值
                let object = window.JSON.parse(string)
                document.body.innerHTML = object.note.from
                console.log(typeof object)
                console.log(object)
                console.log('object.note')
                console.log(object.note)
                console.log('object.note.from')
                console.log(object.note.from)

            } else if (request.status >= 400) {
                console.log('说明请求失败')
            }
        }
    }
    request.open('GET', '/xxx', true)
    request.send()
})