// get request with NEXTjs 15 end point
export async function GET(request) {
    const { searchParams } = new URL(request.url);   
    const id = searchParams.get('id');
    return null;
}