import React, {useRef} from "react";
import ReactDOM from 'react-dom';
import "./App.css"
import bicon from './images/bicon.png'
import {Popover, Input, Avatar, Badge, Divider, Carousel, Image, Button, AutoComplete} from "antd"
import channel_1 from "./images/channel_1.png"
import carousel2 from "./images/carousel2.png"
import carousel3 from "./images/carousel3.png"
import carousel4 from "./images/carousel4.png"
import carousel1 from "./images/carousel1.png"
import recommend from "./images/recommend.png"
import recommend1 from "./images/recommend1.png"
import recommend2 from "./images/recommend2.png"
import recommend3 from "./images/recommend3.png"
import recommend4 from "./images/recommend4.png"
import recommend5 from "./images/recommend5.png"
import recommend6 from "./images/recommend6.png"
import donghuaIcon from './images/donghuaIcon.png'
import touxiang from "./images/touxiang.png"
import img from "./images/img.png"
import img1 from "./images/img_1.png"
import img2 from "./images/img_2.png"
import img3 from "./images/img_3.png"
import img4 from "./images/img_4.png"
import img5 from "./images/img_5.png"
import img6 from "./images/img_6.png"
import img7 from "./images/img_7.png"

import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const {Search} = Input

const zhiboPop = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '280px'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>热门直播</div>
                <div>热门活动</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    <Avatar size={64} src={channel_1}/>
                    <Avatar size={64} src={channel_1}/>

                </div>
                <div style={{height: '80px', border: '1px solid lightgray'}}/>
                <div></div>
            </div>
        </div>
    )
}

const gamePop = () => {
    return (
        <div>
            游戏
        </div>
    )
}
const download = () => {
    return (
        <div>
            下载
        </div>
    )
}

const HoverButton = (props) => {
    return (
        <a>
            <div className={"hoverButton"}>
                {props.text}
            </div>
        </a>
    )
}

const Pre = () => {
    return (
        <div>
            <Button>上一个</Button>
        </div>
    )
}
const Aft = () => {
    return (
        <div>
            <Button>下一个</Button>
        </div>
    )
}
const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '10px'
};


const recommendImg = [
    recommend, recommend1, recommend2, recommend3, recommend4, recommend5, recommend6,
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAswMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYHAf/EAEQQAAIBAwIDBgIHBQYDCQAAAAECAwAEERIhBTFBBhNRYXGBIpEHFCMyobHRFUJScsEkQ2Lh8PE0Y4IWFyUzU2SSk9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAhEQACAgEFAQEBAQAAAAAAAAAAAQIREgMhMUFREyIyof/aAAwDAQACEQMRAD8A1Fzasj4Bz60IS8Z2FHy/WodiWZfBt8UMXLH4lqyZNo8jucfvaT50da3bA7gMPOho4I5CMrvVja8NB5kgeVJtDSYRgSJlVxS7kncCjILTRjDZFGpag7rUnLwskA2qsrDbarFV+HapEt8CpRERyqTZvYEIINMJzhcgUY0ZoeWDcsvvQmFENwSIiEAPjQDT27JpkTSw5Gj5kOMj3qrnt2L8qtCmR1E1wRa9yoIx5cqjeNidsH0NJoHVjUipMOQI9qujntsls4CW+LK1BxQhG0qOVWFs8nIj50NxSN5AMhcA4250l/RqX87FIwJ3xmmshxk7Dwoh4ipIOcjxqFozmro5mD9dqmjcqucNgczinxxdSoO3LNOuJZ5kETELGvJFGBTYt0AytrO9DOpowwNTltj1qlpCabK3uz4Uqte4QbZr2jMMDXlImBVkDHr0od+HWjfulfbNeRs8fNww8+dTd6cZUb+teXZ6YyLhcKNqR1wemasIrdEGxGPKqaXiDJIe9jbb+E5oiC/hkOFlPpijcEWwRBUqAAbVXLKuoAvz8aLj9ayzVBA3p4WmJUy0hPYaUqN0GKnNRt1oaEmwV4iRsM0JOI4z9q6J/MwFA8Z7M/ta7kmk4hPEj4+zRRtgY6/pVSfo54acd7fXz480H5LU1LUv+TocNPG3L/CyuuIcLt1Z7i/tYlXmXmUAD50IO0HATgrxe1OdgFfVn5VTX/Ybs9aRC9mvbmCzCMZZ2nAA5EHOMAbH5ipoew/ASFaSS8lWZ/sSZc5UAHOQORIJzy3FWymRcdMspOPcEUahxWD/AKQx/IU+wu+H8XiklsLlLhIm0uVBGDj/ABCgn7Cdmn0mS0kbHLN1KPyYVYcM4Jwzg8bpw6HuFkI1AOzZxy5k+Nbi5dkpRhWw2WKFlJXIZeQxzoWWPSOVW4iXVkNtUE9qG31+2mrxlRFw2AIYyxwvPFTi2+FmONvKrG1to406HPPao7oALge1H0t0jXyqNlS6AbioSmTscmjhC0g+7inJGIDkYzVMiTj2BCFsD4RSossCTSp2xUiwi3571N3KSbE49DQ6RuuzGiIyFO5zXCdqPJeHh9w5DYxyoR+F3AOQquPEHFWiFTuCamy3gPnRYUV8VpPpAdWGOWTVlAjKo1HelqAHhTkak0aTJ1NPBqEGnZrNA9yXVTSabmvCaBUJjioHmAOKczjrk+lA3TFAXBGcZXUds0xmH+le9tj2U4zbtFd924UZiwFEuoHn1Gcahgctt81ddjJLWXg9gI/rSg2cYiFyh1GNVA54wTvkkbbjnisH9LXEpeHcKayijR2ugsc0rqDpDNI7FfAuQM+mPCtR9H19Pxjs9a8RlhSK5A1NFEuhXGWQkDkNWkN6j3rfBOzatCgXIXbzqLSD0BqWaPv1GiUqo6AYpqQRIc7ajzIP9KYmN+zGxA+VNPdk8qmlhlI2mVR4lM/1qovnubdc99H/ANKVqKsy3RYOAq5G2Kbs0erIrPS8TmZdGWY9MbVGjX8/wkxRjxPMe5quBPPcv8Athht+deXQiPwgBV9KrFsiNRkvmkm6AH9TTDb3kW0kMxIOdj/vRS9DJ+B/cp073H8tKhPrNz/6Ke5Ga8p1ILXhcA5p2cdKjBAr3WPE1yHSSh8fu08SsOpofvGHQ/KnK7ncb586AsKWYnnUiOp/2oVTJnlipCXBycD3xTCwwMMV6GBPOhldgPixjz5VyvtD9LqpK0XALYOgyPrEm+rzA5Y+dI0tzr+aFu7yC1BNzcQwj/mSBfzrgNz2s4/xeLXNxV9Dc0RiB8hgVWNbSupdrogk5J0gVk1iu2d2ue1vAYFLScXtduivqPyGapbn6Ruz0T5juZZz/ggcD0+ICuPGyEgwbiXI9P0rwcNgBy81w3nn9K2jDo3Xaftp2Z4zwu64bLwq6ljuCD3mVjeNhyZT8XLA5ioLL6S+F8NhghtuAIUgTREHu/uDwA0Vj/2VZP8AfWZx/iJr08PsEGI7VVboWUt+dOzBu1+mWME/+CR7/wDuj/8Aimr9L1ozDXw2aHx0Xuv8CorCLFCi4aKMnxEYFDzSQoN419AooA6T/wB5nDLj+/uLf+fl+BNWtrxNeIQiS3uEuIW5sr7VwW5LTykhFXwAqw7K3N1Y8ZtvqrsFmkWORDyYE4/rtVY6lckpQ8O1RMsNxqRgfJzyq0tbjEgkbuOefvZrMtCxJyc70TbaYSCYtRHUn+ldUo7bHPGW+6NfJPI4M0NzDrHPMYzj1qufiV6ilpJImHkc1WNdahhlBz5YoaRg+dKEeeakoelXLwMbi8uo/Zg70qqirZOw+dKqYrwnbNmFP8Te9SKuOpqsPGkP9y2PI05eMwE4bWnqorgpnZsW6yaRso968MsnSMfOqr9s2o/ib2x/WvBxq1yQyuPbNFMLRcJLNkZTbrgVKJ3A2Q1Sfty1GwDU1+OWxwNM3sB+tFMLL36yW2aPb051yDtP2Gl4XxCS44fZy3HC3OpY7cZaEfwkYzjPXw5muhLxe3UZJk9Cv+dVnFeL3E1wscE/1a2IADfvMf6UGrOUSw8OjY91+0Y3H3kOggexGaF+taR8ImIPLUFrofFI7R5VNy31psfecqc888xkUE3DuEXJ0W8EXe8u78fcYpZA0zDNdz9CB8s1FJc3ZJ0ylc10t+y3BCBiykU43Amfn868XsnwVj/w04PlKat85EfrE5gZL8n/AIyQehrwDiTAkXMrj1JxXUT2R4L1huvaX/KvB2U4UudH11QfCQfpR8pB9InK83wBJmkI8cfrmkneF/ti0kf8JYj8RXTbnstwyKI90k5BPxGSU4UeOBT4uC8HtY0k0RyeWx996nJY8lI/pbHPEjs5T3UXCVeY8vjdj8q1nY3sZNBcjiN7EYAgJSMjBJ8x0A8960EN5BEvdxTi3/hAYEfLajobm47kGXGrxxWtKpSFqflE5spA2AT5bivWsbxQCU26ZI3qM8TuAMAr5HSKgk4jcH776gemK6/2ctaYR3MoOGZQfDNI22RvKnsahHEYcZkDl/ahpuI52SMAeu9ZykOohn1JjyJPnSoD9qf8tf8A5f5UqLkOoF5HatkfErY22B3qdbfDBen8p3rnQ43xlGW4ivJ2OMOJPjGQPDSPE7+dFf8Aae+gkSO4vGP7xJiQhgd9tRB5HwrlOg3yKGOkEjfclDUqxEY+H3JwKwN3xziMsfeC9Ro15qVQ4G+D9043G2BUi3/HpgZU4p8K7krkfDnn0G2P6Z6Uthm/QOGxjKj+E0QAy/EA2/QVza14rxhhOH4hOp+8nxLv575J5HyqGe9uGKpd3t9JpAAXUFOAOh5eX9aBnTb65itUAuZ1TVkp3rqurG5xvnasjxHi95drJ/aRbRqdgqBmPzBFZ27nXuw5WZ4NiF06gT6nPlnfqMVZ8O7P3XE+DxXVvdH7XUAAcmPBxj15fpWZp1sag1e6M/dWdrNM0k8l3IznJ+PSCfQbCrOy4nc2EIHD52TG3dzaSG99OfxqG87D8TGRJxWbPPPwgfgKfwzspdW8i/25ZMN/eR5OefPn+NS47KZLw3dpeE2UMl60cMxTMg1YCn3oh54oQGmnijDDILuBkePPzHzFYLtBw0cOs1nMyqxZQVC5ZsbjHp+m9VMExkYRpHqB+8WAyD8thz25YrsjJNHLKNM6HB2g4Vcsqw30WpgSFY6eXPnjfyoo39ojBXvLdSwyoMq7j51y6e3IgYG40qvxfCQ256AKCT7+HOo0kc4CyNEjHSO8QnAHpsBt1x4eFatGaOi8U4tMk4gtXijQjPfkhh7cxWN4siXsubu7upiuQDGAg3/lA/GiuzVhLxWW8giuQHgAcxDOGzleZ36b8uY5U6+7FcUkJc8SmRTyVQuF/OuTVTcuTq03FR4AuFyDh4K2U9zDvnLsrDPuDWl4NxSe5hka/kgVgQFYOAW9vl86y9v2NvIZCW4iznqJE1fLI/Kri47OiHh8s1xKjGKNnLZwrYBI55x/rxpacsZci1P1GqLt7yD4v7TF8H3syj4fXfaniVNRHeAEcwZAD5VzsTtcTantLqBUzjSoVVXw6jrvn02rw3Bj7otGy4+ISd0CJCd9ydsc66voQUDpDXEUY+OdFAH70gFQve22rSbmPV0+0rAMIzdxQSITqAwohxgnqCefToPfpPEUMoeR4jjCBYtWST5k7f786zmPE2JvrTJ/tUH/ANw/WlWER7nT8P1tANgojK4Hp0pUvoPAHleRriUWUUzIW0qBMWcnfn0zz86fJax2ck0N8wilQgKAMltv4lz03wefjVayoZVaMd2ea4+E+g2H5eVGWljJcyCJ5JXwutF0DkcAZORgA9fGkInntJF0tazTNrXPe/FlV54zyPOoVvbqNu5nvCgc4I5BTt+7jYelOWW1SGHWwSWN/jEZ7t877lgd9+ufH3KWVVYNCsVzMEAGEaU4JwF05ztnoNsUjQPeyfVJI4pJ+9kQZdYzgocjy5Hbp+ZokXTGCNoozIxIVUdAS5IzzxgeufLpTWmcW+qdVSCEkTJOhcaiQMDGSDnwwRnr1eY7Oc3MZguWzgxiGbGQemnYld8csigKYoBFPfKtqiTSDCIUYsWbPLJ6DfpjxrTJY31hbGOwlleXm/ckpEufHGNfvis6l23ZxluBa2zGLfLzrk5BGCASc4JH55o69+k3h8tn3CW0y4OcBdj6/hWW30ail2QzQcYlJ77jl1g9NKn+lE2nDuKxLtftdo4z8Rww8xgj8azMvbmHLfV7N1zkZzknPOoYe31/G6iK1TAO3x7/AICsYyNNxNDxW2uYcPdrcOpXCtJltPLlsen+jVVHcL34yrzEFV0nkCeeQd+XpXo7QT8fuYopOIGKR9gsyKAB4BuX5Zp6yyi4eKaWWTGchvuHJ3GM7j0JrohutyEudiVtWotGdKqgBjK6xsDzBOc7dNqJWf6syIGgutI7xiYwqgHpsMHAPPlvVe1xfW9m7WrRwq7HTDEqtuOe/T1zj0pHicjIxtZ1l7tNMmtcMDnIIJPruKdiRquF8KMEKXUcTxzlfsUt3xIRzBJGMZx6nyoLiC8dlnfveKz2/jFHg6fXOT+NewfSbaW8LQ3FuwlKaGkiU49qoLvt5avKWjtJGJONR2xUJZMvHGi4t+GcUz30XF5ZMHeOQDB9ak4lDxOHVPPHJJACuoNIVCNyyCOmSD0rKnt3dpITFajJ3Jc8/wAKMbtrJxCw+rcR72BfD7yMemcDIHz9qSUkwdMu7GSzeVO+dUuNHwCNtYYZAAUHODsBzr29cFBJHDNIuQpwqjPP4dQPhttvQfcpfSO8Vy0yJGBMAiqI49xjIxkADONzy51DObaOKNbV49MZ7pVkIWTCnOrflufXJrTEuCeCaGSZUgiv3hwWJ6ux6eQzgcz1prz2y8N0d2sczShWbRsoABwccsZ6Y5e1CXMPEprlgZHFuB8LaAoJP7ucgepJ6czXs3D54Ea4FtE8EoBUGTocHY5+LfrikO2Q/XZVJBELHJ3aFifnkV5RsnFbO4bvbn9nvMwGsy27Fgccicb45e1e0ZPwMF6U8dzGgefEkrKmCuyHB/iI57mpontohHdWV5NaXEjMjxgFtG2R0GVI8TnI96VKtGST9kpbus0/cTxOPsnVmVXPXUNOeh22HnUfEUkjuDGkUbQ416ZckDbH3c4PuT7UqVKLsJKuA6zubGTurqSdkl1hQzWasjP0BBc7Z8V2qZ7+7t+JQySiK1YS6miiQJGQdyTpyRnI2APpSpU+x9AfavikfGrmCW5kC6AUCxpkKM7eGfw/XO3FjbjHdmSQ9dQCgfLOaVKmZIkgVdhEmPPJp+iQH4G7seCDGa8pUAFWsFsbhZP/ACyp1KiAkA+/TNXFu97O+q4uEk2QBWzuPb1+Z96VKtxMSPShuGgzCD3YLO6Pg588jl5DpQ1/LINcTkGMghyrHAOx+7gbUqVPpiKuSztHj1JJLITyGgKPnk/lQwtkRjiNc+ZJpUqmUHmM4+BVj81AzUsdsk7Ikm0rnGvJLPk9em3SlSpMCyE159Ujsbd2iUElow2AWXbp4DFRxTPLD3Vwsck2rIeQAhVHPoTmlSo6DstLrisQaaeGKSNgAC8bhQDp0+Gdzknz8OdPs7tri0a3WTRDGmtlijVtG5yBqA8cnHjSpUmjSZV3bqLhwe/bHJsgZHTbNKlSrNCyP//Z',
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcA1gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwYBB//EADMQAAIBAwMDAgQFBAIDAAAAAAECAwAEERIhMQVBURMiBhRhcTKBkaGxI0LR8BXBQ1Lx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EACIRAAICAwACAwEBAQAAAAAAAAABAhEDEiEEMRNBUSIyFP/aAAwDAQACEQMRAD8A+gwTKmC+48CjYHVJQyklT5pPG6g7nAphG0TQFUOWG4Oa+ffs9icC3UYj63qodjVYmKAdx4q9sVcAOee5PFazRqoAHPenQf2L4v5NbWUOcED9MUh+KrBCfmjKTgYVCfrzv2pxA+jgVtdRQ3NnJHOmV84pt2gb0naOA+XB20g0Hc2uJBjYHua6O6tEgmKpnTkkULc24kXjG3ag9FXyWc96ZzvvWqRnSQAcd/pRhg3wBXqxsoKKSNQ3Hmis3YFVMHFaIuD99q2EXH0q6RE5+ldsc3ZiIxV1i+lFRQZ/touK2J7V2wNgSxNoCHOkHOPrV1tie1NEtT4oiO1GfcNq6wXOhL8t5Brz5YeKffKZJ/ap8lqIAxvRJMz5Tnmtx4rNoD2FdBNaaCRsSKHMcYzqQtt27VwSyWJvRO23NQQ7jamXogYGNu1T0h4rGztgAQ71skeKK9E4ziqsAF+ppUmdsbJbRgbjPfevJdlwOPFWjdimaxmb2nPNCjARypPu/mpXoTO5FSmHUHaq9WbSwwaHeVVOGbFZ+spYYNIaLlC10d28hKjPFGay43J2pdav7V+oFMIgZBp/euinZHlSTN4yBt2NUu1u3JEQJiJGNP8A3V1jYAdz9K2DugxuKqgv0lYpubeWOLLxEOTszDNBpAztuMDzXThldcMTg84rMWcUmpWUgncMK1xsxZK9nNC2iRsFQ2fIrQwRZ9qDP0FFX1qtrcaPUJ1DKjGTVFjc50rxzSmhilYmMGGII71rHB9KYfK6iWJH6VaOEauKwPYygtc4o9LUKdsEVpDEBR1vBrYdl7mjirEymDQ2xc4UfnR0VigHv935UYkYCjSMKP3qs08MGPVcA+O9UwxUTSytlVt4x/41/Srm2jI3Rf0rC36lDPN6cau3lgNh96PpyghezE/VLeytbZ7i4k9CNeW3P7VzfX2ih6JNcJcZjkjDxvDJpZgSMY8Zrret9Oh6p02W0uCwRx+JTup8iknxdZWln8IyQpaxOsEaxRtIgb0QdtXnalzx2UYskUkn7s5voN3L1Lp6TCLZCYyC3uyO5ptHBk78V78M9J+S6BBIFA+Y/rEeM8DP2/7pgIh2G+alcWh8pq+A7RKF4FBzBV9oAAHemM0ehuc0vu12J/altBRZhrwD2FYzsrsNAOO+arMxFYepW0OUTckCpWBcn7VK03UEd2kc71aP8Y1namdn0czMrGUKCOMbg17dWJgZ1YE6TjVjY11xfCl5knqeW0mhtnDKeKcWtwQBg0iiXRmjYZdGnHNDWrFTWyHhuMn2D86NicSIvqgiknqgCjLK+C+x+M7GmxmrI8mPnAqRTG5XJqoumX2q2/1ouQRT5KsCQOAaTSAxyHWMAV03SFQSl7CZrRL9vVeRoyoxt3NbL0iERj3PkjY571hDMgbZgfNHo3qRMqvyNq5UZJSj6FKJ7igIJG2R5q6QFGwwIP1qyxASlC2ccYotLfG/IrtDnIpGnimMarDF7iAFHuJNBSzQWa+rcOFUH8yfpXLdd+I2uMhD6cQ3VAefvVOHE2yfJMedV+IUiBW3OAP7z3+1cnP1ee5uVhiJDyvgE+O5P+9xXPXfUXlk8t2HamHwqvzl/JMwOmEYGRuG/wB2/KvRjiUVYpOz6H0eL0YY0Hbk+aek4pL0sMWQsN87/rTkmpZvoZNjzWN5bJeWslvJn032YA8jx9q1Br2gswE6fYJZ9NhswdaRJpBP+8VhJEiasDnimR4oK8peRIOD6KbrTHyaUXEuTnsKaXi5zilN36ZVQi4I535qWSLsYFMxkJ0ihJTpOBRM7adhQqoZGoSuPop6h81KLHT5WUFImI8gVK7ZG3EeWmoaWTgHFM1lUwv62CmDnNKLSTRIFDHR4qdVlmRk0tiAjBUdzSIW5UBmj3oFIiq3tG2dquuQucViNcrDDBF8tRESSNn3xlAdmU/i/I1Xkhqug488ZukaKTjUMkfxUjnKsAPO9Y3LMrDTsvasw5yCDv3+lJqh7has6Tpssel3kbLk4GBwKvfFGtpHHuYDtSqzJfA3o4Iwz7sgjitt0Qyx1IAhkw2ME0xhn0A/ahPQxL5H0rd7i0tYz8wUXPb8RNbCLNySSXQkSI7hu/FU6l1iDp8ZUkPLj8Odl+9ct1P4kRC6WWUAGM53rkL/AKrJMzFmJz2zV+LDfsgyZU/Q6698QtcOfeSTy1cdc9ZuTMRGcgbZ8VLiRnTVnGeN6C0g6m2253Ga9CEFFEzlYYLlgvqZy2dh5NfRPg2ze16cF5dyCT5r530C2bqN+kaDOnuOAP8ANfZujWnpRIuN8bbf72x+tdlkkg4DrpkRVctzijSapGNCYqrP4rzpy6MLk1FaqZzUzigTNo0Y4FBXrbD86ILZpd1CXDBfpWSYcI9Ft/JpA0kk4324pPI++rGxo+8Yf/KVzMze3t2pBfjQPM41Z5zV7UanA2Ge5rN4z3rP1DEQRjI80LKTrLWT0oESTdgO1SklteyXSsztpwcbVKmlHvsV8QL065N0zFWAZTTiCVmVRcxlsHbNch0+2nLaYmwzZI/KupsriYwlZgNa4BBpjjXUXeRBSXRmLK2uomzGAxXY+DXGz9Um6NdSWt2iqUODgbV1MErxscZA5Fc18SdCvOs9Ra4t3hRWwDrbP7DJqnxsqTqb4eR5Hjyj/WM3T4gsbmIBmIft4rSG6tCM+qoBpFJ8C3MUyZvITDn3yKDlduQO/wCvelfWujCwukSLqLSRNwrL78+MA7703XBN1FgLyvIhH+kdp1DqcEVkxs7+OOZcMMvgHfG9c/ffGz2s/owX3zGkDUxTC5+h5NcldW8ojVZAMN7gNtX+aDS3EbgOmAPNUY/GilT9EeXynN2lTO2b406jcRkLIq7Y9owaBk6lNKo1yM5PJJPNI45VGEQDOQK6G56VF060e5urlJUMeEQLg6z3/Km644Uv0CKyZLf4ASXLYJyADQctwCpZdgOSawuJ00b5wDkkVg15pwR7TyAKocUlwVZ5LI2o6d1534rCNy8mNyDtVnLSxs7E5PGdyf8AfNdR8FfDPzrx3kxIhB4J5P8Aiu2SXQkrHvwZ0YWlsGdSZJcM30HYV9J6bHpQM2/bNIYI2jYRRga2P9op/bqYowmScd2rzsvk3JorWHWKb+w4t9a8xWDFtORuauj7b1OsibM1o1G1VbdvpVTIAM5zXqSK6kg4HejtXRyRSVwiszHAAyaQ3E/qOzk8mrdV6irt6UZBTO580rluMjYb0uTKcWP7Z7PICaGLgHYZJqD3sA2+a0DwRSDUMY4oG6K0vovLYuUVifc39uKDuemFI8rLqbG4I/ijvmGncLGNz+1FMsaREsTsNye9IcpBJtHLtctaqEUE552xvUpvf2EFxErKBjVs6kb1KK4/ZQpRoTWdwpcMrrtvT23ljuiNA37kVythaTSrqOEXVg6uSK6W1kSKJdCkAbYzR2mHllfoYXUUhtXaLUWAyMc0ot+oXPriOC2OrGfdtW83Vlt5lQE5O5omOSJm1pjel1r7Ewadpqzc2Fx1G1dXYI7jfeuF6z8Pz9PufcpDc6gDX0WxlYuMHC8Zra4SK5n1PpbC4AO9Fh8jThB5GHeVHyGSznJLurFjuSxyT9aEVYzcEXJ0KvNfZbu2s7mNo5olJIGWAwRj6iuVn+F+lyhj60qsD7tWCP4q3F5sJcZH/wAk07XRB/yHSBAGeJG9MgoFGGHPiud6/wBSk6hcLJ6Ughj9qbfrmu5j+FenvMFjcyjuNQUUxT4O6YuC8ee+M5H80/FKEZWrYeWORxp0j456kxY/0jvxsTRNt064kVriS3dYUGWdgfsB+9fYrfo/S7Un0rWHI3HsBJ/mkPx/fwp06Cyg0+rK2ooP7VHn8/4py8iM5axJ3glCO0jhMI0B9uSB52r658KWfyXQLNHU6igcjHBbf9s/tXzj4b6TJf3sUBB0M3uPgdz+lfXI/Y4V/aoXKrwAKDyMii9QsEG/6NLKHEwJwWDEgmjXk1HIOAOaRvK00xZDhVPNbC5Yk4P0ry80+0i7437Y1+YGPYQcdqstzkDgUsgbJzq70QZEzucGkRb+zHAIeYNso280PdLK8JSFtyNxnGayaVg2xBFW9U6cDA+oo45KC0OevDNFKUmUqQM4z2rBGMp3O1dBPaWsxDOGd8YyDjH381lB0qCOHXJNqctnC9h4pm6qxqkkJ2JiTXg0vkmLNnJ/xXUdRuYPQ0Kq6ey42rlpYlL+wHBP4QayM0xsP1hthd6Ii2Sunv5rLqU+pckk6t+a2miEVoqBNxue+KT3LhU0g7DiuSV2NjTZ5LfzhBGkpVAdlFSlM03uqUWqKEhjL1QA6D7Qu21QdUYIQmTnzSRpPUbPOTV4ySNuBWqKQlR56G5vhIBrHu25o2O/0x4HH70gjZT+LNelnbZD7R5NZJWHGCj066163HBGVkBYk8CmFreCfXIjnPmuAVm9Qam5OK63pKn01bUBgYNSyxKPUHUGn+jm8eUWr6SwLEBQOaTyi6WbQQVLb4amgvIyQr41LsSDVOo25vGhMTgqmfxn+K2MqEqNcaMrK2nWEyxncc43rSW3eDTJLy22nO4NG2cyohWNSQPyzWPUGFxbl1jYyKdsbmi3YvuwBLcFMkfgA/aufit7C9vJL7qUq7nCQ6/wqOM/4plHAL+Vop9aQ/3Y2JIo216H0uLLLCZFZcHW2cb1QskMcevrJ86lOSUVaRj8PrBGj3SQpEJc+kgG6p9fv/GKcpKsmrU2kdznFKLjQHcRscZ23ojp1k8yGVpNMY/uzmlvJtLYc/HjGHsMlmRBhQAKHFxyeBWV/G8eFhYS522GMVmlpjSz3EYcHLDmt4/YUccdfYwjn/8AVs/etwsrk5OFHek9pbyGRmaQCMbhsbNTSbqMccWV921Kl+GSgk+ESUCQ+pIRjgAc15Nfxpkh9+MUjuOpmZ/wjHPjFawTQLbOZSNbHPG+PAoNGH8aq2MIr5pJMFsgivJOqRBmQsuoUJDdW8EBI5Y0hv7tGkYxncnfbFHDHb6F8aY3ub4SHCgFyPyrK3YiXJTVjtSATsm4bmvJL6XRpDkD6Gna0br9D+8vy4ZT7cDGAaS3c2cnP5UAbpsksxOfrVRcK+Q/NYlQxKjC4kOr61Ks8yLsAPyFe0VhpmEkbxYJ2+xq8dwUVSBtn3fWpUovaBb1dI2O8wKbec0+soFlT+tGgA4K/wCKlSlZfQKdlms4rd8ooYc4NDxdVntWeNU0yZ52xUqVkEpLoCfWM06o9wXaZBqTAVk22q01+7qCjtjHHivalY4qx0OorH1KRSvuIwRRB6qWPcVKlY0FKESP1JNAEedb8nHNCf8AIzR7asGpUoKR0YIvb9UUTapow7Djaipes6VCxLhSNxjFSpRL2c8cWLm6lIWYhiCecVmt6RuVz96lSmoxxSNT1F9PdUxsBWMlyZSFGR25qVKFg0jQRqsIIU6uSc80HLce7GDUqVsOsxmYmkllWPUfFCXzfLuVbJJqVKYuSo1/5sG9cEYqxA9PJJzUqVsjML/oFbO+370Mpdnzj6VKld9BSfSMXzUqVK4Gz//Z',
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0j2b3isDNTzrx9R0by0EU2YvJgSr5F2iGow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXUS8dW4T-_dkzklxoRuheRqTklPh0zA2bg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uoLHP967D-py-76XgT79iiZQSkXQVQZqXA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_2azxJ-wM2QoYrhq19ucBgr_hWoZvt5i4w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSG46O2YrVF2rqmhHFY6Nsons02vsD0MeTqg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhNo-dO9UeK3akEX31_lAdQxRkUwqA9WGRw&usqp=CAU',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlov7Gh0raEq8eoLk_QFNFywo3Wod7QiaAzw&usqp=CAU",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi04piccdn.sogoucdn.com%2F478a8c7a8e8dbc21&imgrefurl=https%3A%2F%2Fpic.sogou.com%2Fpic%2FsearchList.jsp%3Fstatref%3Dsearchlist_hintword_down%26keyword%3D%25E9%25A3%258E%25E6%2599%25AF%25E5%259B%25BE%25E7%2589%2587%25E5%25A4%25A7%25E5%2585%25A8%25E5%25A4%25A7%25E8%2587%25AA%25E7%2584%25B6&tbnid=uxD-MyekFp51GM&vet=10CJABEDMoqwFqFwoTCKjzqMWohfoCFQAAAAAdAAAAABAC..i&docid=SqdNvFAmE3JFTM&w=499&h=312&q=%E5%9B%BE%E7%89%87&ved=0CJABEDMoqwFqFwoTCKjzqMWohfoCFQAAAAAdAAAAABAC",
]

const cartonImg = [img, img1, img2, img3, img4, img5, img6, img7

]

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.carouselEL = React.createRef()
        this.state = {
            topFixed: false,
            chose: [4, 5, 6, 7, 8, 9, 10, 11]
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {
            this.checkImages()
        }, 1)
        window.addEventListener('scroll', this.checkImages)

    }


    hoverButtonText = ["番剧", "国创", "综艺", "动画", "鬼畜", "舞蹈", "娱乐", "科技", "美食", "汽车", "运动", "vlog", "电影", "电视剧", "纪录片", "游戏", "音乐", "影视", "知识", "资讯", "生活", "时尚", "动物圈", "更多"]

    handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 40) {
            document.getElementsByClassName("header_bar")[0].classList.add("header_bar_top")

            this.setState({
                topFixed: true,
            })
        } else {
            document.getElementsByClassName("header_bar")[0].classList.remove("header_bar_top")
            this.setState({
                topFixed: false,
            })
        }

    }
    onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    checkImages = () => {
        const imgs = document.querySelectorAll('img');
        imgs.forEach((item, index) => {
            if (item.src === '' && this.isInClient(item)) {
                item.src = item.getAttribute('datasrc')
            }
        })
    }

    isInClient = (item) => {
        const offset = item.getBoundingClientRect();
        const bodyHeight = document.body.offsetHeight;
        if ((offset.top > 0 && offset.top < bodyHeight + (bodyHeight / 2)) || (offset.bottom > 0 && offset.bottom < bodyHeight + (bodyHeight / 2))) {

            return true
        } else {
            return false
        }
    }

    repush = () => {
        const arr = [];
        let p = 1;
        while (arr.length <= 7) {
            console.log(Math.random() * 2 + p)
            let m = Math.round((Math.random() * 2 + p - 2) % 10)
            arr.push(m)
            p += 2
        }   //math.random返回0-1
        console.log(arr)
        this.setState({
            chose: arr
        })
        document.getElementsByTagName('img')

    }
    con = () => {
        console.log(this.state.chose)
    }

    render() {
        return (
            <div className={"mainPage"}>
                <div className={"header"}>
                    <div className={"header_bar"}>
                        <div className={"header_bar_content_1"}>
                            <div className={"bar_item"} style={{display: this.state.topFixed ? "inline" : "none"}}>
                                <img src={bicon}/>
                            </div>
                            <div className={"bar_item"}>
                                <a //考虑router
                                    href="https://www.bilibili.com"
                                    style={{display: "flex", alignItems: "center"}}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        color="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{marginRight: "6px"}}
                                        className="BiliBili-icon">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span style={{color: "white"}}>首页</span>
                                </a>
                            </div>

                            <div className={"bar_item"}>
                                番剧
                            </div>
                            <Popover content={zhiboPop} placement={"bottom"}>
                                <div className={"bar_item"}>
                                    直播
                                </div>
                            </Popover>
                            <Popover content={gamePop} placement={"bottom"}>
                                <div className={"bar_item"}>
                                    游戏中心
                                </div>
                            </Popover>
                            <div className={"bar_item"}>
                                会员购
                            </div>
                            <div className={"bar_item"}>
                                漫画
                            </div>
                            <div className={"bar_item"}>
                                赛事
                            </div>

                            <div className={"bar_item"}>
                                下载客户端
                            </div>

                        </div>
                        <div className={'search'}>
                            <Search
                            />
                        </div>
                        <div className={"header_bar_content_2"}>

                            <div className={"bar_item"}>
                                <Avatar src={touxiang}/>
                            </div>
                            <div className={"bar_item"}>
                                大会员
                            </div>
                            <div className={"bar_item"}>
                                消息
                            </div>
                            <div className={"bar_item"}>
                                动态
                            </div>

                            <div className={"bar_item"}>
                                收藏
                            </div>
                            <div className={"bar_item"}>
                                历史
                            </div>
                            <div className={"bar_item"}>
                                创作中心
                            </div>
                            <div className={"bar_item"}>
                                <button style={{color: 'white', background: '#fb7299', borderRadius: '5px'}}>投稿</button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className={"content"}>
                    <div className={"channel"}>
                        <div className={"channel_1"}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Badge dot offset={[-5, 5]}>
                                    <Avatar src={channel_1} size={40}/>
                                </Badge>
                                <div>动态</div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Avatar src={channel_1} size={40}/>

                                <div>
                                    热门
                                </div>
                            </div>
                            <a>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Avatar src={channel_1} size={40}/>
                                    <div style={{color: "black"}}>频道</div>
                                </div>
                            </a>

                        </div>
                        <div className={"channel_2"}>
                            <div style={{display: 'flex', flexDirection: "row"}}>
                                {this.hoverButtonText.map((i, j) => {
                                    if (j <= 11) {
                                        return (
                                            <HoverButton text={i} key={i}/>
                                        )
                                    }


                                })
                                }
                            </div>
                            <div style={{display: 'flex', flexDirection: "row"}}>
                                {this.hoverButtonText.map((i, j) => {
                                    if (j > 11) {
                                        return (
                                            <HoverButton text={i} key={i}/>
                                        )
                                    }
                                })
                                }
                            </div>
                        </div>
                        <div className={"channel_3"}>
                            <Divider type="vertical" style={{height: '64px', color: 'black'}}/>
                            <div style={{display: 'flex', flexDirection: 'column', width: '90%'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>专栏</a>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>活动</a>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>社区中心</a>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>直播</a>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>课堂</a>
                                    <a className={"channel3A"} style={{color: 'black', margin: '5px'}}>新歌热榜</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row_one"}>
                        <div className={'row_one_lunbo'}>
                            <Button
                                className="leftButton"

                                onClick={() => {
                                    this.carouselEL.current.prev();
                                }}
                                icon={<LeftOutlined/>}
                            />
                            <Button
                                className="rightButton"

                                onClick={() => {
                                    this.carouselEL.current.next();
                                }}
                                icon={<RightOutlined/>}
                            />
                            <Carousel afterChange={this.onChange} ref={this.carouselEL} autoplay>
                                <div>
                                    <div style={contentStyle}>
                                        <div>
                                            <Image src={carousel1}
                                                   datasrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t4lJWDg0dr2nNMIl6zSyXOX9sgevpUXSPw&usqp=CAU'}
                                                   height={290} style={{borderRadius: '10px 10px 0 0'}}/>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div style={contentStyle}>
                                        <div>
                                            <Image src={carousel2}
                                                   datasrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t4lJWDg0dr2nNMIl6zSyXOX9sgevpUXSPw&usqp=CAU'}
                                                   height={290} style={{borderRadius: '10px 10px 0 0'}}/>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div style={contentStyle}>
                                        <div>
                                            <Image src={carousel3}
                                                   datasrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t4lJWDg0dr2nNMIl6zSyXOX9sgevpUXSPw&usqp=CAU'}
                                                   height={290} style={{borderRadius: '10px 10px 0 0'}}/>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div style={contentStyle}>
                                        <div>
                                            <Image src={carousel4}
                                                   datasrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t4lJWDg0dr2nNMIl6zSyXOX9sgevpUXSPw&usqp=CAU'}
                                                   height={290} style={{borderRadius: '10px 10px 0 0'}}/>
                                        </div>

                                    </div>
                                </div>
                            </Carousel>

                        </div>
                        <div className={"tuijian"}>
                            <div className={"tuijianRow"}>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[1]]}/>

                                    </div>
                                    <div title="标题1" className={'bottomTitle'}>标题1</div>
                                </div>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[2]]}/>

                                    </div>
                                    <div title="标题2">标题2</div>
                                </div>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[3]]}/>

                                    </div>
                                    <div title="标题3">标题3</div>
                                </div>
                            </div>
                            <div className={"tuijianRow"}>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[4]]}/>

                                    </div>
                                    <div>标题4</div>
                                </div>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[5]]}/>

                                    </div>

                                    <div>标题5</div>
                                </div>
                                <div className={'tuiijanhover'}>
                                    <div className={"menban"}><img
                                        src={recommendImg[this.state.chose[6]]}/>

                                    </div>
                                    <div>标题6</div>
                                </div>

                            </div>
                        </div>
                        <div className={'flowtop'}>
                            <a>
                                <div
                                    className={"btnflow"}
                                    onClick={this.repush}
                                    style={{
                                        height: '40px',
                                        border: "1px solid gray",
                                        borderRadius: '9px',
                                        width: '60px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'black'
                                    }}>
                                    换一换
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={"gexian"}/>
                    <div className={"row_two"}>

                        <div className={"donghuaContent"}>
                            <div style={{height: "40px", display: 'flex', flexDirection: 'row'}}><img
                                src={donghuaIcon}/>
                                <div style={{fontSize: 25, paddingTop: '3px'}}>动画</div>
                            </div>
                            <div className={"tuijianDonghua"}>
                                <div style={{marginTop:"10px"}}>
                                    <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[0]}/></div>
                                </div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[1]}/></div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[2]}/></div>
                                <div className={"menban"}><img src={cartonImg[3]}/></div>

                            </div>
                            <div className={"tuijianDonghua"}>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[4]}/></div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[5]}/></div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={cartonImg[6]}/></div>
                                <div className={"menban"}><img src={cartonImg[7]}/></div>

                            </div>


                        </div>

                        <div className={"donghuaContent"}>
                            <div style={{height: "40px", display: 'flex', flexDirection: 'row'}}><img
                                src={donghuaIcon}/>
                                <div style={{fontSize: 25, paddingTop: '3px'}}>娱乐</div>
                            </div>
                            <div className={"tuijianDonghua"}>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={recommendImg[0]}/></div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={recommendImg[1]}/></div>
                                <div className={"menban"}><img src={recommendImg[2]}/></div>

                            </div>
                            <div className={"tuijianDonghua"}>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={recommendImg[3]}/></div>
                                <div className={"tuijianImg"}><img loading="lazy" datasrc={recommendImg[4]}/></div>
                                <div className={"menban"}><img src={recommendImg[5]}/></div>

                            </div>


                        </div>

                    </div>
                    <div className={"gexian"}/>
                </div>

                <div className={"flowBtn"}>

                    <a>
                        <div
                            onClick={
                                this.con
                            }
                            className={"btnflow"}
                            style={{
                                marginTop: '5px',
                                height: '53px',
                                border: "1px solid gray",
                                borderRadius: '9px',
                                width: '40px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: '3px',
                                color: 'black'

                            }}>
                            新版反馈
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Demo;