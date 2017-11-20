
export const selectLibrary = (libraryId: number) => {
    return {
        type: 'SELECT_LIBRARY',
        payload: libraryId
    };
};