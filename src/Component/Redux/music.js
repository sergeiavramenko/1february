
let initialState = {
    JoeSatriani: [
        {
            name: "JoeSatriani",
            id: [{i: "Train"}, {i: "The next qwteers"}, {i: "The next teeqqwrs"}, {i: "The next teers"}],
            album: <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QFKRXhpZgAASUkqAAgAAAADAA4BAgD6AAAAMgAAAJiCAgAWAAAALAEAABIBAwABAAAAAQAAAAAAAABMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpMjAyMCBGdXR1cmUgUHVibGlzaGluZ//tAXZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAABWRwCUAAVR3VpdGFyIFdvcmxkIE1hZ2F6aW5lHAJ4APpMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpHAJ0ABYyMDIwIEZ1dHVyZSBQdWJsaXNoaW5nHAJuACBGdXR1cmUgUHVibGlzaGluZyB2aWEgR2V0dHkgSW1hZwD/4QY3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMCBGdXR1cmUgUHVibGlzaGluZyIgcGhvdG9zaG9wOkNyZWRpdD0iRnV0dXJlIFB1Ymxpc2hpbmcgdmlhIEdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyMzA4Mzc5MjYiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+R3VpdGFyIFdvcmxkIE1hZ2F6aW5lPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5MT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBK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"/>
        },
        {
            name: "JoeSatriani",
            id: [{i: "Train"}, {i: "The next qwteers"}, {i: "The next teeqqwrs"}, {i: "The next teers"}],
            album: <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QFKRXhpZgAASUkqAAgAAAADAA4BAgD6AAAAMgAAAJiCAgAWAAAALAEAABIBAwABAAAAAQAAAAAAAABMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpMjAyMCBGdXR1cmUgUHVibGlzaGluZ//tAXZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAABWRwCUAAVR3VpdGFyIFdvcmxkIE1hZ2F6aW5lHAJ4APpMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpHAJ0ABYyMDIwIEZ1dHVyZSBQdWJsaXNoaW5nHAJuACBGdXR1cmUgUHVibGlzaGluZyB2aWEgR2V0dHkgSW1hZwD/4QY3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMCBGdXR1cmUgUHVibGlzaGluZyIgcGhvdG9zaG9wOkNyZWRpdD0iRnV0dXJlIFB1Ymxpc2hpbmcgdmlhIEdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyMzA4Mzc5MjYiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+R3VpdGFyIFdvcmxkIE1hZ2F6aW5lPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5MT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBK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"/>
        },
        {
            name: "JoeSatriani",
            id: [{i: "Train"}, {i: "The next qwteers"}, {i: "The next teeqqwrs"}, {i: "The next teers"}],
            album: <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QFKRXhpZgAASUkqAAgAAAADAA4BAgD6AAAAMgAAAJiCAgAWAAAALAEAABIBAwABAAAAAQAAAAAAAABMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpMjAyMCBGdXR1cmUgUHVibGlzaGluZ//tAXZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAABWRwCUAAVR3VpdGFyIFdvcmxkIE1hZ2F6aW5lHAJ4APpMT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBKb2UgU2F0cmlhbmksIHBob3RvZ3JhcGhlZCB3aGlsZSBwcm9tb3RpbmcgaGlzIDE3dGggc3R1ZGlvIGFsYnVtLCBTaGFwZXNoaWZ0aW5nLCBpbiBMb3MgQW5nZWxlcywgb24gSmFudWFyeSAxNSwgMjAyMC4gKFBob3RvIGJ5IEplbiBSb3NlbnN0ZWluL0Z1dHVyZSBQdWJsaXNoaW5nIHZpYSBHZXR0eSBJbWFnZXMpHAJ0ABYyMDIwIEZ1dHVyZSBQdWJsaXNoaW5nHAJuACBGdXR1cmUgUHVibGlzaGluZyB2aWEgR2V0dHkgSW1hZwD/4QY3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMCBGdXR1cmUgUHVibGlzaGluZyIgcGhvdG9zaG9wOkNyZWRpdD0iRnV0dXJlIFB1Ymxpc2hpbmcgdmlhIEdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyMzA4Mzc5MjYiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+R3VpdGFyIFdvcmxkIE1hZ2F6aW5lPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5MT1MgQU5HRUxFUywgVU5JVEVEIFNUQVRFUyAtIEpBTlVBUlkgMTU6IFBvcnRyYWl0IG9mIEFtZXJpY2FuIGd1aXRhcmlzdCBK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"/>
        },
        {
            name: "JimmyHendrix",
            id: [{i: "Dog"}, {i: "Master"}, {i: "The next teeqqwrs"}, {i: "Element"}],
            album: <img
                src="data:image/jpeg;base64,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"/>
        },
    ]
}
export const musicReducer = (state = initialState , action) => {
    return state;
}
export default musicReducer;




