drop database if exists project;
create database project charset=utf8;
    use project;
    set names utf8;
    create table user(
        uid int auto_increment primary key,
        uname varchar(50),
        upwd char(32),
        email varchar(20)
    );
    INSERT INTO `user` (`uid`, `uname`, `upwd`, `email`) VALUES
    (1, 'test', '098f6bcd4621d373cade4e832627b4f6', '23121@141.com');   /*测试用户test，密码test*/

    create table subject(
        sid int auto_increment primary key,
        sName varchar(50),
        time bigint 
    );
    INSERT INTO `subject` (`sid`, `sName`, `time`) VALUES
    (1, '人文摄影二十一条军规（简单易学，实用）', 1478078185000),
    (2, '单反相机手动拍摄技巧', 1478078210000),
    (3, '《摄影小知识》', 1478078434000);

    create table comment(
        cid int auto_increment primary key,
        content text,
        sID int,
        uName varchar(50)
    );
    INSERT INTO `comment` (`cid`, `content`, `sID`, `uName`) VALUES
    (1, '1、老人，越丑陋越老越让人高兴，他们可以在任何地方，如果是在一个破败的房子前那很棒，如果在一个时髦的建筑前那更棒！\r\n\r\n2、有箭头的路边指示牌，指示牌可要占据画面主要的位置，镜头可要广一点，它能让平常不过的东西产生所谓的“冲击力”。如果有个人走过就好了。如果那个人行走的方向正好和箭头的方向相反那就谢天谢地了。那里头有着琢磨不透的“情绪”呢。\r\n\r\n3、自行车，它在的地方最好能空旷一些，不能有太多车，一辆就够了，很孤独的样子。那辆车如果是破旧的，油漆脱落的，那就很“漂亮”了。\r\n\r\n4、信箱，它和自行车不一样，它要很多，最好是那些很有年头的老房子门口的信箱，一层迭着一层，最好是有一两个涂过鲜艳的红色或者绿色油漆的，那信箱上总是写着各家人家的姓氏的。\r\n\r\n5、从高架桥上往下拍的十字路口，画面上要有斑马线，最好是所有车都停下的那一刻，天气不可以太好，暗一点正好有气氛，如果有个行人或者自行车敢闯一闯红灯，那就是完美的构图了。\r\n\r\n6、长长窄窄的弄堂，从弄堂口往里拍，不错，但不稀奇。从弄堂里蹲着向外拍更好，但是还得等等，等到一个行人或者一辆自行车从弄堂口穿过，那就棒了。\r\n\r\n7、所有的老房子，破房子，拆了一半的房子，墙最好有几个画了圆圈的“拆”字。如果这些房子背后有新建的，正在建造的高层就更好了，那可以做新和旧的对比。如果再有个载着历史责任感的老人愁眉苦脸地走过，那就全齐了。\r\n\r\n8、和上面的新旧对比异曲同工，摩登女孩和老太对比，老外和中国人对比，传统和时尚对比，有钱人和穷人对比。只要他们能同时出现在取景框内，那就毫不犹豫地按下快门。\r\n\r\n9、江南水乡，长长的巷子，这个时候要有孩子，孩子的任务就是要跑，有动有静，就成了。\r\n\r\n10、水乡人的一切活动，生炉子，包粽子，洗马桶，洗衣服……\r\n\r\n11、下棋的人，不管是年轻的还是年老的，不管是一个人的，还是一堆人围成个圈的，只要是下棋的，就拍一张，管它有没有用！\r\n\r\n12、修自行车的人，这时候要考虑的可是自行车线条的构成和修车人所组成的画面，构图一定要好看。\r\n\r\n13、乘凉的人，光着膀子的，扇着扇子的，啃着西瓜的，如果这些能同时出现在画面上，那就是都市旧风情画了。\r\n\r\n14、卖报亭里的人，画面上最好是一大圈各色杂志中间留出一小方块空间，那卖报人的头就在那方块中间。\r\n\r\n15、各种商贩，最好是生意不做，就在打盹儿。\r\n\r\n16、所有打着盹儿或者睡着的人。\r\n\r\n17、乞丐和一切弱势群体，可以反映社会阴暗面。\r\n\r\n18、所有标志性建筑，但一定要有人在画面前活动，它们只是背景。\r\n\r\n19、新天地，怎么拍，都是人文。\r\n\r\n20、不再拍全部的人了，就拍一双脚就够了，窥一足而知全人。\r\n\r\n21、实在没有人的就要讲构图了，要么全满，要么大片留白，要么一虚一实，要么画面中有一小块突兀的颜色。', 1, 'test'),
    (2, '1、拍静止的小东西的特写，如花、鸟、虫：\r\n用Av档，光圈最好在f5.6或以下，焦距最好50以上，尽量在1m以内拍摄，使背景虚化！\r\n光线好的话，iso100，光线不好的话，iso最好400以内。\r\n2、拍人：\r\n基本都是使用较大的光圈（f5.6以内）、50mm以上的焦距，拍摄距离视全身、半身、大头照而定，使背景虚化，使用Av档！\r\n光线好，iso100，光线不好，iso400以内。\r\n运动中的人使用追拍，体现运动感（详见下面的运动物体的拍摄）！\r\n3、拍景：\r\nAv档，使用适当的光圈，f8以上吧，焦距随便，但是，一般广角端都有畸变，酌情使用。\r\n4、拍夜景：\r\n上三脚架，Av档，自定义白平衡或白炽灯，f8以上的光圈，小光圈可以使灯光出星光的效果，使用反光板预升功能，减少按快门后，反光板抬起引起的机震；并用背带上的那个方盖子，盖住取景器，以免杂光从后面进入影响画质；iso200以内，尽量使曝光时间加长，这样可以使一些无意走过的人从画面消失，不留下痕迹，净化场景！\r\n例如拍一个广场，人来人往，可以使用很小的光圈f20左右，iso100，这样，曝光时间就会很长，那么，走动的人影，不会留在照片上！广场将会很干净！\r\n5、拍烟花：\r\n使用快门线，B快门，可以拍出多烟花重叠的效果！\r\n6、拍运行的东西：\r\n光线好的情况：Av档，光圈大小酌情处理；使用f8以上的光圈得到大景深效果，使用小光圈得到浅景深的效果；\r\n想拍很有动感的效果，可以使用Tv档，快门1/30左右，对焦按快门的同时，镜头以合适的速度追着对象移动，会出很动感的效果！\r\n光线不好的情况：只能酌情处理了，再加上使用追拍！\r\n7、拍流水或喷泉：\r\n使用Tv档，1/50左右的快门速度，可以拍出缎子的效果，如果使用太快的快门，喷泉拍出来就都是不连续的水滴了！\r\n8、夜间人像留影：\r\n上三脚架，调节白平衡，自动或自定义白平衡；iso100-400；Av档，光圈f8左右，使用慢速同步闪光，后帘闪光模式；此时，闪光灯会闪两次，按下快门闪一次，曝光结束前会再闪一次，所以在闪两次前，人不要离开。\r\n这样拍出来可以使人物清晰，背景霓虹也很漂亮，不至于背景曝光不足而过暗。\r\nAv光圈优先技巧:\r\n1.不管拍啥.除非要保持安全快门，不然别开最大光圈拍。\r\n2.拍风景请尽量使用F8~F11的光圈。\r\n3.拍人物及静物特写可使用最大光圈缩1~2级之光圈。\r\n4.安全快门请尽量控制在焦距倒数以上.广角端快门也要在1/30秒以上比较保险.若快门不足请提高光圈或ISO。\r\n测光方式：\r\n1.测光不要对着天空，不要对着最暗的地方.要去抓中间值。\r\n2.依照你拍的题材，善用测光模式(权衡测光.点测光.中央重点测光...)。\r\n3.若遇到测光抓不准的时候，请用AE lock 对身边灰色的东西曝光锁定后再来拍摄。\r\n4.尽量别对白色或黑色物体测光，不然就请记得黑要减EV、白要加EV。\r\nEV 即曝光补偿 \r\n曝光补偿也是一种曝光控制方式，一般常见在±2-3EV左右，如果环境光源偏暗，即可增加曝光值(如调整为+1EV、+2EV)以突显画面的清晰度。 \r\n小型数码相机大多通过菜单来调节曝光补偿 \r\n数码相机在拍摄的过程中，如果按下半截快门，液晶屏上就会显示和最终效果图差不多的图片，对焦，曝光一切启动。这个时候的曝光，正是最终图片的曝光度。图片如果明显偏亮或偏暗，说明相机的自动测光准确度有较大偏差，要强制进行曝光补偿，不过有的时候，拍摄时显示的亮度与实际拍摄结果有一定出入。数码相机可以在拍摄后立即浏览画面，此时，可以更加准确地看到拍摄出来的画面的明暗程度，不会再有出入。如果拍摄结果明显偏亮或偏暗，则要重新拍摄，强制进行曝光补偿。 \r\n拍摄环境比较昏暗，需要增加亮度，而闪光灯无法起作用时，可对曝光进行补偿，适当增加曝光量。进行曝光补偿的时候，如果照片过暗，要增加EV值，EV值每增加1.0，相当于摄入的光线量增加一倍，如果照片过亮，要减小EV值，EV值每减小1.0，相当于摄入的光线量减小一倍。按照不同相机的补偿间隔可以以 1/2（0.5）或1/3（0.3）的单位来调节。 \r\n被拍摄的白色物体在照片里看起来是灰色或不够白的时候，要增加曝光量，简单的说就是“越白越加”，这似乎与曝光的基本原则和习惯是背道而驰的，其实不然，这是因为相机的测光往往以中心的主体为偏重，白色的主体会让相机误以为很环境很明亮，因而曝光不足，这也是多数初学者易犯的通病。 \r\n由于相机的快门时间或光圈大小是有限的，因此并非总是能达到2EV的调整范围，因此曝光补偿也不是万能的，在过于暗的环境下仍然可能曝光不足，此时要考虑配合闪光灯或增加相机的ISO感光灵敏度来提高画面亮度。 \r\n一般的说，景物亮度对比越小，曝光越准确，反之则偏差加大。相机的档次有高有低，档次高的，测光就比较准确，低的则偏差也会加大。如果是传统相机，胶卷的宽容度是比较大的，曝光的偏差在一定范围内不会有大问题，但是数码相机的CCD宽容度就比较小，轻微的曝光偏差都可能影响整体的效果。 \r\n总而言之，曝光补偿的调节是经验加上对颜色的敏锐度所决定的，用户一定要多比较不同曝光补偿下的图片质量，清晰度、还原度和噪点的大小，才能拍出最好的图片。\r\n注：\r\n佳能说明书上的光圈是指F数值，光圈越大，景深越大。\r\n一般人们所说的光圈是指光圈孔径，和F数值成反比，光圈（孔径）越大，景深越小。\r\nAv--光圈优先自动曝光。\r\nTv--快门优先自动曝光\r\nAE-自动曝光 \r\nAF-自动对焦 \r\nAF-S--和SAF应该一样，是单次自动对焦。相对的是连续自动对焦。 \r\nMAF-监控AF，这个模式可以缩短对焦所需的时间。相机在快门按钮按下一半之前就会调整焦点，让您以调整好的焦点进行构图。将快门按钮按下一半，而且af 锁定完成时，焦点会被锁定。 \r\nEV-曝光值，通常在进行曝光补偿时会用到这个术语。 \r\nISO-感光度，感光度每差一档，相当于光圈或者快门相应的一档曝光值。', 2, 'test'),
    (3, '一.如何取得效果不错的剪影照片： \r\n        1. 充分展现剪影主题的形体特征，将形体与背景生动的结合在一起，可以说，形体是语言，背景是语调，而这种语言有时无声胜有声，任凭创作者去揣摩和体会，这也就是剪影照片的妙处所在。由于在剪影照片中，主体基本没有色彩和细节显示，所以对主题的形体特征要求就很高，这就需要作者基于后期表现的效果来仔细选择拍摄角度和主体形态，充分展示主题的外形特征，力求美感和生动。  \r\n       2. 剪影照片的获得充分利用了主题与背景受光的差异。一般来说，我们可以利用日出日落时的逆光，因为这时的光线最柔和，看上去又不刺眼，是拍摄的好时机，一般只有十分钟左右的时间，另外可以利用室外和室内人工造成的受光差异或天空和水面的自然反射。 \r\n       3. 曝光要遵循宁欠勿过的原则，依据背景的光亮部分进行点测光，这才能使主体曝光严重不足，形成强烈的剪影。 4. 当画面中被摄主体在画面中所占比例过小，或画面的空白空间比较单调时，可以创造性地运用剪影作为前景，通过黑色的剪影既可以压迫观众的视觉投向被摄主体，同时黑色剪影也不会分散观众的注意力。我们甚至可以运用以剪影作为主体的边框，形成方、圆或变异的各种形状，使平常的景物具有独特的画面形式感，增加画面的纵深感。\r\n\r\n         二.如何拍摄动物 ： 拍摄动物时按动物生活场面的不同可分为几种拍摄对象，一是栖息于大自然的野生动物；二是放牧于山野草原的牛羊；三是饲养于庭院的鸡、鸭和家中的猫狗。不同场地的动物拍摄方法也不完全一样。\r\n         下面就动物的一般拍摄要领及器材选择简介于下： \r\n       1. 拍摄器材的选择。动物活动性大，常需要抓拍，因此数码单反相机会派上用场。镜头可选择广角变焦镜头与长焦变焦镜头各一只。 \r\n       2. 表现方法。拍摄动物应从两个方面去表现，一是生态描写，主要表现其生活习性，如休息、玩耍、捕食等和个性特征（如虎的勇猛，狼的凶残等）。二是形态描写，每一种动物都有各自的形态，如：骆驼的驼峰，斑马的斑纹，孔雀开屏，大象的长鼻等等，都能表现出造型的美感。 \r\n       3. 拍摄技巧。动物拍摄的快门速度一般不低于1/60秒。对于动作敏捷的动物要使用1/125秒以上的快门速度。对于动作缓慢的动物，对焦都不成问题，而对动作快速，移动性大的动物对焦就比较困难。可采用区域对焦，定点对焦和移动对焦等方法来快速抓拍动物生态形象。\r\n       4. 拍摄注意事项。拍野生动物为防止意外，最好用长焦镜头在远处抓拍。对于野生动物应了解其习性、经常出没的地区和时间等，以利于拍摄。应注意闪光灯对动物的影响，尽量使用自然光，若光度实在不足也可利用反射物（如墙壁、积雪等）进行补偿。\r\n\r\n  三.如何拍好景物在水中的倒影 ： 水面要平静。常言道：“水平如镜”，只有如镜的水面才能有效地映出岸边的景色。实景最好背光。即使水面宁静，如果光线条件不理想，倒影也不会尽善尽美。\r\n      一般来说，拍摄倒影的最佳光线是低位光的逆光，其次是侧光和漫射光，最忌的是顶光和顺光。在理想的光线条件下，天空和实景会形成强烈的明暗对比，投到水面上的影像就显得清晰、分明。 拍摄视点须选择低角度。画面上倒影的多少与拍摄视点选择的高低有密切的关系。拍摄视点高，倒影显得少；拍摄视点低，倒影出现得多。同样，低角度拍摄，使倒影显得大而全。 曝光要准确。倒影多产生于水面上，水面的反光常会给摄影者视觉上的错觉，以为拍摄现场亮度很高。其实背光的实景和水中的倒影亮度是不高的。拍摄时一般可以参照逆光条件下拍照的曝光值，也就是比正常曝光开大1－2档光圈或放慢1－2档快门速度。 由于拍摄倒影时常是在临水的岸边，拍摄视角一低，镜头很容易受到水面上杂乱的反射光干扰，形成光线冲镜，造成光晕现象，影响画面。所以拍摄时，照相机镜头最好能使用遮光罩。', 3, 'test');


