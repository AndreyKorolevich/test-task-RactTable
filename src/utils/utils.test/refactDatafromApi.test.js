import refactData from "../refactDatafromApi";
import {nanoid} from 'nanoid';

jest.mock('nanoid');
beforeEach(() => {
    jest.resetAllMocks();
});

test('should user with userId', () => {
    const expected = [
        {
            id: 101,
            firstName: 'Sue',
            lastName: 'Corson',
            email: 'DWhalley@in.gov',
            phone: '(612)211-6296',
            address: {
                streetAddress: '9792 Mattis Ct',
                city: 'Waukesha',
                state: 'WI',
                zip: '22178'
            },
            description: 'et lacus magna dolor...',
            userId: 'user112'
        }
    ]
    nanoid(1).mockReturnValue('user112');
    const recived = refactData([
        {
            id: 101,
            firstName: 'Sue',
            lastName: 'Corson',
            email: 'DWhalley@in.gov',
            phone: '(612)211-6296',
            address: {
                streetAddress: '9792 Mattis Ct',
                city: 'Waukesha',
                state: 'WI',
                zip: '22178'
            },
            description: 'et lacus magna dolor...',
        }
    ])
    expect(recived).toBe(expected);
});
