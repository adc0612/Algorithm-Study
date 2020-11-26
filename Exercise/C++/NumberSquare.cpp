#include <iostream>
using namespace std;

int calc(int a, int b){
	if(b==0){
		return 1;
	}
	else if (b==1){
		return a;
	}
	else if( b%2==0){
		int temp = calc(a,b/2);
		return temp*temp;
	}
	else{
		return a* calc(a,b-1);
	}
}

int main(){
	int a = 5;
	int b = 10;
	cout << calc(a,b)<<'\n';
	return 0;
}
