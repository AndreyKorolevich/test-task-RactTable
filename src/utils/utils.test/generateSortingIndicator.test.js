import generateSortingIndicator from "../generateSortingIndicator";

test('should sort down', () => {
const received = generateSortingIndicator({
        isSorted: true,
        isSortedDesc: true
    });
    expect(received).toBe(' 🔽');
});

test('should sort up', () => {
const received = generateSortingIndicator({
        isSorted: true,
        isSortedDesc: false
    });
    expect(received).toBe(' 🔼');
});

test('should no sort', () => {
const received = generateSortingIndicator({
        isSorted: false,
        isSortedDesc: false
    });
    expect(received).toBe('');
});
