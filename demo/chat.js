// 发送信息
function SendMsg()
{
    var text = document.getElementById("text");
    if (text.value == "" || text.value == null)
    {
        alert("发送信息为空，请输入！")
    }
    else
    {
        AddMsg('default', SendMsgDispose(text.value));
        text.value = "";
    }
    // request请求
    AddMsg('DBot', SendQuestion(text.value))
}
// 发送的信息处理
function SendMsgDispose(detail)
{
    detail = detail.replace("\n", "<br>").replace(" ", "&nbsp;")
    return detail;
}

// 增加信息
function AddMsg(user,content)
{
    var str = CreadMsg(user, content);
    var msgs = document.getElementById("msgs");
    msgs.innerHTML = msgs.innerHTML + str;
    msg_end.scrollIntoView();
}

// 生成内容
function CreadMsg(user, content)
{
    var str = "";
    if(user == 'default')
    {
        str = "<div class=\"msg guest\"><div class=\"msg-right\"><div class=\"msg-host headDefault\"></div><div class=\"msg-ball\" title=\"今天 17:52:06\">" + content +"</div></div></div>"
    }
    else
    {
        str = "<div class=\"msg robot\"><div class=\"msg-left\" worker=\"" + user + "\"><div class=\"msg-host photo\" style=\"background-image: url(../Images/head.png)\"></div><div class=\"msg-ball\" title=\"今天 17:52:06\">" + content + "</div></div></div>";
    }
    return str;
}

function SendQuestion(question)
{
    url = "http://127.0.0.1:5000/get_answer/?q=" + question + "&user_id=1000&chatbot_id=2000"
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
            httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
            httpRequest.send();//第三步：发送请求  将请求参数写在URL中
            /**
             * 获取数据后的处理程序
             */
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    var json = httpRequest.responseText;//获取到json字符串，还需解析
                    console.log(json);
                }    
            }
    return js.response_data;
}
