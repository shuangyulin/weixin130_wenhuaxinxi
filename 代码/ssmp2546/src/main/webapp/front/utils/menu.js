const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"会员","menuJump":"列表","tableName":"huiyuan"}],"menu":"会员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"新闻类型","menuJump":"列表","tableName":"xinwenleixing"}],"menu":"新闻类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"新闻资讯","menuJump":"列表","tableName":"xinwenzixun"}],"menu":"新闻资讯管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"文化类型","menuJump":"列表","tableName":"wenhualeixing"}],"menu":"文化类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"文化展示","menuJump":"列表","tableName":"wenhuazhanshi"}],"menu":"文化展示管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"文章类型","menuJump":"列表","tableName":"wenzhangleixing"}],"menu":"文章类型管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"新闻资讯列表","menuJump":"列表","tableName":"xinwenzixun"}],"menu":"新闻资讯模块"},{"child":[{"buttons":["查看"],"menu":"文化展示列表","menuJump":"列表","tableName":"wenhuazhanshi"}],"menu":"文化展示模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"新闻资讯列表","menuJump":"列表","tableName":"xinwenzixun"}],"menu":"新闻资讯模块"},{"child":[{"buttons":["查看"],"menu":"文化展示列表","menuJump":"列表","tableName":"wenhuazhanshi"}],"menu":"文化展示模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"会员","tableName":"huiyuan"}]
    }
}
export default menu;
