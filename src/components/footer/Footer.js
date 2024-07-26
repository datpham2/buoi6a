import "./footer.css"

function Footer(props) {
    const {name1, age1} = props;
    const x = 5;
    const arr = [{name: "Lê Mèo", age: 3}, {name: "Lê Thỏ", age: 2}, {name: "Lê Nai", age: 4}];

    return (
        <div>
            <div className="footer" id="footer1">
                Footer 1
                <h1>X= {x}</h1>
                <h1>Tên: {name1}</h1>
                <h1>Tuổi: {age1}</h1>
                {
                    arr&&arr.map((item, index) => (<p key={index}>{item.name}</p>))
                }
            </div>
            <div className="footer">
                Footer 2
            </div>
        </div>
    )
}
export default Footer;