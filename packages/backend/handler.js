export const hello = async (evt, ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0 ${await message({
        time: 1,
        copy: "Your function executed successfully!",
      })}`,
    }),
  }
}

const message = ({ time, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay)`)
    }, time * 1000)
  )
