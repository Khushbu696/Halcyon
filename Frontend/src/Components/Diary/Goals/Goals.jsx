import './Goals.css'

function Goals() {

    return (
        <>
            <div className="goals-left">
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
        </>
    );
}

export default Goals