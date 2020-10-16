function Mendchilgee(){//Function component -> props-гүй
    return <h1>Hello bitch</h1>
}
function Mendchilgee47(props){//Function component -> props-той
return <h1>{props.ner}</h1>
}

function Mendchilgee247(props){//Function component -> props-той олон HTML рэндэрлэнэ
    return (
        <div>
    <h1>{props.ner}</h1>
    <p>{props.nas}</p>
        </div>
    )
    }

function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee47 ner={props.ner}/>
            <Mendchilgee247 ner={props.ner} nas={props.nas}/>
        <table>
            <tr><td>    {props.angi[0]}</td></tr>
            <tr><td>    {props.angi[1]}</td></tr>
            <tr><td>    {props.angi[2]}</td></tr>
        </table>
        </div>
    )
}

ReactDOM.render(
    // <Mendchilgee47 ner="Hello naraa"/>,
    <EtsegComp ner="Hello Naraa" nas="19" angi={['ПХ', 'МС' ,'НББМС' ]} />,
    // <h1>Hello, world! D13 Akran</h1>,//jsx
    document.getElementById('root')
  );
