const Options = ({update, reset}) => {
    return (
        <>
            <button type="button" name="good" onClick={update}>
                Good
            </button>
            <button type="button" name="neutral" onClick={update}>
                Neutral
            </button>
            <button type="button" name="bad" onClick={update}>
                Bad
            </button>
            <button type="button" name="reset" onClick={reset}>
                Reset
            </button>
        </>
    );
};

export default Options;
