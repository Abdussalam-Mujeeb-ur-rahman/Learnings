export default function Stats({ items }) {

    if (!items.length) {
      return <footer className="stats">
        <em>Start adding items to your packing list 😀.</em>
      </footer>
    }
  
    const noItems = items.length;
    const noPacked = items.filter((item) => item.packed).length;
    const percent = noItems === 0 ? 0 : Math.round((Number(noPacked) / Number(noItems)) * 100);
    return (
      <div className="stats">
        <em>
          <small>
            {percent === 100 ? (
              "You got everything! Ready to go🚆"
            ) : (
              <>
                You have <strong>{noItems}</strong> items on your list, and you
                already packed{" "}
                <strong>
                  {noPacked}({percent}%)
                </strong>
              </>
            )}
          </small>
        </em>
      </div>
    );
}