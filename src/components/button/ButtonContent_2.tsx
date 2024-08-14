
interface ButtonContent2Props {
    titleBtn?: string;
    linkBtn?: string;
    btnstyle?: string;
    gmbUrl?: boolean;
}



const ButtonContent_2: React.FC<ButtonContent2Props> = ({ titleBtn, linkBtn, btnstyle, gmbUrl }) => {
    return (
        <div>
            <a
                href={`${linkBtn ? linkBtn : "/contact"}`}
                className="capitalize"
                target={linkBtn && gmbUrl ? "_blank" : "_self"}
                aria-label={titleBtn ? titleBtn : "Free Estimate"}
            >
                <button className={btnstyle ? btnstyle : 'btnStyle2'}>
                    {titleBtn ? titleBtn : "Free Estimate"}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </a>
        </div>

    );
}
export default ButtonContent_2;
