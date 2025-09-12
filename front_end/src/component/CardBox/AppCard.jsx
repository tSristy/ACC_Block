import appBg from '../../img/Layer26.png';

const AppCard = ({ cardTitle }) => {
    const boxStyle = {
        position: 'relative',
        width: '260px',
        height: '400px',
        backgroundImage: `url(${appBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div style={boxStyle}>
            <div style={{
                // height: '3rem',
                width: '100%',
                fontSize: '1rem',
                padding: '1rem 0rem',
                color: 'white',
                textTransform: 'uppercase',
                position: 'absolute',
                top: 270,
                backgroundImage: `linear-gradient(180deg,#66cc33, #187b3d)`,
                textAlign: 'center',
            }}>{cardTitle}</div>
        </div>
    );
};

export default AppCard;