import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// /. imports

type RoomFilterState = {
    roomCount: string;
    selectedButtonId: number;
};

// /. interfaces

const initialState: RoomFilterState = {
    roomCount: '',
    selectedButtonId: 1
};

// /. initialState

const roomFilterSlice = createSlice({
    name: 'roomFilter',
    initialState,
    reducers: {
        setRoomCountValue(state, action: PayloadAction<string>) {
            state.roomCount = action.payload;
        },
        switchButtonSelectedStatus(state, action: PayloadAction<number>) {
            state.selectedButtonId = action.payload;
        }
    }
});

// /. slice

export const { setRoomCountValue, switchButtonSelectedStatus } =
    roomFilterSlice.actions;

export default roomFilterSlice.reducer;
