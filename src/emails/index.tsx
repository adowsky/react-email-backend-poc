import { render } from '@react-email/render';
import { SimpleEmail } from './SimpleEmail';
import { ListingEmail } from './ListingEmail';

import * as React from "react";

export async function renderEmail(templateName: string, payload: any): Promise<string> {
    let component: React.ReactElement;
    switch(templateName) {
        case 'simple': {
            component = <SimpleEmail />
            break;
        }
        case 'listing': {
            component = <ListingEmail {...payload} />
            break;
        }
        default:  {
            throw new Error('Unknown template: ' + templateName)
        }
    }
    return await render(component);
}

