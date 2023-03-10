const Mock = require("mockjs")

let friendChatList = Mock.mock([
    {
        img: "",
        name: "艾伦·耶格尔",
        detail: "地鸣将至。",
        lastMsg: "Rumbling, it's coming.",
        id: "1002",
        headImg: require("@/assets/img/head_portrait1.jpg"),

    },
    {
        img: "",
        name: "希斯特利亚",
        detail: "Give one's heart",
        lastMsg: "test data",
        id: "1003",
        headImg: require("@/assets/img/head_portrait2.jpg"),

    },
    {
        img: "",
        name: "埃尔文",
        detail: "兵士たち、進め",
        lastMsg: "献出心脏",
        id: "1004",
        headImg: require("@/assets/img/head_portrait3.jpg"),
    },
])


/*  extend为附加值，包含chatType和fileType
    chatType： 0文字,1图片,2文件
    imgType：1表情、2本地图片
    fileType：1word，2excel，3ppt，4pdf，5zpi, 6txt
*/
let chatRecords_2 = Mock.mock([
    {
        headImg: require("@/assets/img/admin.png"),
        name: "Admin",
        time: "09:12",
        msg: "在干嘛呢",
        chatType: 0, //信息类型，0文字，1图片
        uid: "1001", //uid
    },
    {
        headImg: require("@/assets/img/head_portrait1.jpg"),
        name: "艾伦·耶格尔",
        time: "09:12",
        msg: "地鸣",
        chatType: 0,
        uid: "1002",
    },
    {
        headImg: require("@/assets/img/admin.png"),
        name: "Admin",
        time: "09:13",
        msg: "在干嘛呢",
        chatType: 0,
        uid: "1001",
    },
    {
        headImg: require("@/assets/img/head_portrait1.jpg"),
        name: "艾伦·耶格尔",
        time: "09:17",
        msg: "追寻自由",
        chatType: 0,
        uid: "1002",
    },
    {
        headImg: require("@/assets/img/head_portrait1.jpg"),
        name: "艾伦·耶格尔",
        time: "09:20",
        msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
        chatType: 1,
        extend: {
            imgType: 1,
        },
        uid: "1002",
    },
    {
        headImg: require("@/assets/img/head_portrait1.jpg"),
        name: "艾伦·耶格尔",
        time: "20:20",
        msg: require("@/assets/logo.png"),
        chatType: 1,
        extend: {
            imgType: 1,
        },
        uid: "1002",
    },
])

let chatRecords_3 = Mock.mock([
    {
        headImg: require("@/assets/img/head_portrait2.jpg"),
        name: "希斯特利亚",
        time: "00:00",
        msg: "献出心脏",
        chatType: 0,
        uid: "1003",
    },
    {
        headImg: require("@/assets/img/admin.png"),
        name: "Admin",
        time: "09:13",
        msg: "在干嘛呢",
        chatType: 0,
        uid: "1001",
    },
    {
        headImg: require("@/assets/img/admin.png"),
        name: "Admin",
        time: "09:18",
        msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
        chatType: 1,
        extend: {
            imgType: 1,
            fileType:""
        },
        uid: "1001",
    },
])

let chatRecords_4 = Mock.mock([
    {
        headImg: require("@/assets/img/head_portrait3.jpg"),
        name: "埃尔文",
        time: "21:12",
        msg: "asd",
        chatType: 0,
        uid: "1004",
    },
    {
        headImg: require("@/assets/img/head_portrait3.jpg"),
        name: "埃尔文",
        time: "21:13",
        msg: "在干嘛呢",
        chatType: 0,
        uid: "1004",
    },
    {
        headImg: require("@/assets/img/head_portrait3.jpg"),
        name: "埃尔文",
        time: "21:14",
        msg: "在干嘛呢",
        chatType: 0,
        uid: "1004",
    },
    {
        headImg: require("@/assets/img/head_portrait3.jpg"),
        name: "埃尔文",
        time: "21:15",
        msg: "在干嘛呢",
        chatType: 0,
        uid: "1004",
    },
])

Mock.mock(/friend\/chatList/, 'post', () => {
    return friendChatList;
})

Mock.mock(/friend\/chatMsg/, 'post', (config) => {
    let params = JSON.parse(config.body)
    if (params.friendId == "1002") return chatRecords_2
    if (params.friendId == "1003") return chatRecords_3
    if (params.friendId == "1004") return chatRecords_4
})