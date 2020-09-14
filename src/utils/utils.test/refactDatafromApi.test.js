import refactData from "../refactDatafromApi";

const myMock = jest.fn();
myMock.mockImplementation(() => 'user112');

test('should user with userId', () => {
    const expected = [
        {
            id: 101,
            firstName: 'Sue',
            lastName: 'Corson',
            email: 'DWhalley@in.gov',
            userId: 'user112'
        }
    ]
    const recived = refactData([
        {
            id: 101,
            firstName: 'Sue',
            lastName: 'Corson',
            email: 'DWhalley@in.gov',
        }
    ], myMock)
    expect(recived).toEqual(expected);
});
