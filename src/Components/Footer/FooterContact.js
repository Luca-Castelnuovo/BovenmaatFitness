import React from 'react';

const FooterContact = () => {
    return (
        <div className="column is-one-third">
            <p className="title">Contact</p>

            <div className="columns is-centered">
                <div className="column is-narrow">
                    <a
                        href="tel:0356018613"
                        className="button is-primary is-medium"
                    >
                        035 601 8613
                    </a>
                </div>

                <div className="column is-narrow">
                    <a
                        href="mailto:tpreijde@xs4all.nl?subject=Contact%20Bovenmaat%20Fitness&body=H%C3%A9%20Tom%2C%0D%0A%0D%0A"
                        className="button is-primary is-medium is-outlined"
                    >
                        tpreijde@xs4all.nl
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;
