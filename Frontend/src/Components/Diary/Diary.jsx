import { useNavigate } from 'react-router-dom';
import home_icon from '../../assets/home.png';
import account_icon from '../../assets/account.png';
import settings_icon from '../../assets/settings.png';
import help_icon from '../../assets/help.png';
import goal_icon from '../../assets/goal.png';
import add from '../../assets/add.png';
import './Diary.css';

function Diary() {
    const navigate = useNavigate();

    return (
        <div className="diary">
            <div className="diary-left">
                <h1>Halcyon</h1>
                <div className="contents">
                    <div onClick={() => navigate('/dashboard')}>
                        <img src={home_icon} alt="home icon" /> Home
                    </div>
                    <div>
                        <img src={goal_icon} alt="goal icon" /> Goal Tracker
                    </div>
                    <div>
                        <img src={account_icon} alt="account icon" /> Accounts
                    </div>
                    <div>
                        <img src={settings_icon} alt="setting icon" /> Settings
                    </div>
                    <div>
                        <img src={help_icon} alt="help icon" /> Help and feedback
                    </div>
                </div>
            </div>

            <div className="diary-right">
                <div className="diary-navbar">
                    <div className="title">
                        <h1>Diary</h1>
                        <h3>A collection of notes from your life.</h3>
                    </div>

                    <div className="create">
                        <img src={add} alt="add icon" /> Create
                    </div>
                </div>

                <div className="container">
                    <p>No diaries yet.</p>
                </div>
            </div>
        </div>
    );
}

export default Diary;
