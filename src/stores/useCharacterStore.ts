import {defineStore} from 'pinia'


export const useCharacterStore = defineStore('character', {
    state: () => ({
        skinColor: '#FFC0CB',
        bodyHeight: 120,
        bodyWidth: 80,
        bodyMaxWidth: 80,
        bodyMinWidth: 40,
        bodyMaxHeight: 120,
        bodyMinHeight: 80,
        headMinRadius: 30,
        headMaxRadius: 60,
        headRadius: 40,

        legHeight: 120,
        legMinHeight: 60,
        legMaxHeight: 180,
        legMinWidth: 5,
        legMaxWidth: 20,
        legWidth: 10,
        legYOffset: 5,
        handYOffset: 5,
        handMinYOffset: 0,
        handMaxYOffset: 15,
        legXOffset: 0,
        handXOffset: 5,
        handMinXOffset: 0,
        handMaxXOffset: 15,
        handMinWidth: 5,
        handWidth: 10,
        handMaxWidth: 15,

        handHeight: 100,
        handMinHeight: 80,
        handMaxHeight: 120,
    }),
    getters: {
        width(state): number {
            return Math.max(state.bodyWidth, state.headRadius * 2);
        },
        maxWidth(state): number {
            return Math.max(state.bodyMaxWidth, state.headMaxRadius * 2)
        },

        center(): number {
            return this.width / 2
        },
        maxCenter(): number {
            return this.maxWidth / 2
        },
        leftOffset(): number {
            return (this.maxWidth - this.width)/2
        },
        headHeight: (state ) => state.headRadius * 2,

        bodyTop(state): number {
            return state.headRadius * 2
        },
        bodyLeft(state): number {
            return (this.width - state.bodyWidth) / 2
        },
        bodyRight(state): number {
            return this.bodyLeft + state.bodyWidth
        },
        leftHand(state): number {
            return this.bodyLeft - this.handXOffset - state.handWidth
        },
        rightHand(): number {
            return this.bodyRight + this.handXOffset
        },
        handsTop(state): number {
            return this.bodyTop + state.handYOffset
        },
        legsTop(state): number {
            return this.bodyTop + state.bodyHeight + state.legYOffset
        },
        leftLeg(): number {
            return this.bodyLeft - this.legXOffset
        },
        rightLeg(state): number {
            return this.bodyRight + this.legXOffset - state.legWidth
        },
    }
})
