#include <iostream>
using namespace std;
const int MAX = 1000000;
bool c[MAX+1];
int main(){

	int m,n;
	cin >> m >>n;

	c[0] = c[1] = true;
	for(int i=2;i*i<=MAX;i++){
		if(c[i] == false){
			for( int j=i+i;j<=MAX;j+=i){
				c[j] = true;
			}
		}
	}
	

	for(int i=m;i<=n;i++){
		if(c[i] == false){
			cout << i <<'\n';
		}
	}

	return 0;
}