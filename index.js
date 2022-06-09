superbowlWin = (record) => {
    const superbowlResult = record.find(record => record.result === "W");
    return superbowlResult ? superbowlResult.year : undefined;
}
 