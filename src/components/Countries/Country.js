import BackIcon from "../../assets/images/back.svg";

const Country = ({flag}) => {
    return <>
        <div>
            <img src={BackIcon} alt="" aria-hidden="true" width="32"/>
            <span>back</span>
        </div>
        <div>
            <div>
                <img src="https://flagcdn.com/be.svg" alt="country falg" width="150" />
            </div>
            <div>
                <h1>Belgium</h1>
                <div>
                    <dl>
                        <dt>Native Name</dt>
                        <dd>Belgie</dd>
                        <dt>Population</dt>
                        <dd>11,319,511</dd>
                        <dt>Region</dt>
                        <dd>Europe</dd>
                        <dt>Sub Region</dt>
                        <dd>Western Europe</dd>
                        <dt>capital</dt>
                        <dd>Brussele</dd>
                    </dl>
                    <dl>
                        <dt>Top Level Domain</dt>
                        <dd>.be</dd>
                        <dt>Currencies</dt>
                        <dd>Euro</dd>
                        <dt>Languages</dt>
                        <dd>Duch, French, German</dd>
                    </dl>
                </div>
                <div>
                    <h3>
                        Border Countries:
                    </h3>
                    <div>
                        Frans
                    </div>
                    <div>
                        Germany
                    </div>
                    <div>
                        Netherlands
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Country;