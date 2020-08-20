myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应都完毕了')
            console.log(request.status)
            console.log(request.statusText)
            if (request.status >= 200 && request.status < 300) {
                console.log('说明请求成功')
                console.log(request.getResponseHeader('Content-Type'))
                console.log(request.responseText)
                let string = request.responseText
                //把符合 JSON 语法的字符串
                //转化成 Js 对应的值
                let object = window.JSON.parse(string)
                document.body.innerHTML = object.note.from

            } else if (request.status >= 400) {
                console.log('说明请求失败')
            }
        }
    }
    request.open('POST', '/xxx', true);
    request.setRequestHeader('fang', '20');
    request.setRequestHeader('Content-type', 'x-www-form-urlencoded');
    request.send('我偏要设置第四部分')
})

