#include <iostream>
using namespace std;

int main()
{
    long long int L,R,i;
    cin >> L >> R;
    for (i = L; i <= R; i++)
    {
        if (i % 2 != 0)
        {
            cout<<i<<" ";
        }       
    }
    return 0;
}