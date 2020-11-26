#include <iostream>
using namespace std;

int a[50][2];

void preOrder(int x){
	if (x==-1)
		return;
	cout<<(char)(x+'A');
	preOrder(a[x][0]);
	preOrder(a[x][1]);
}

void inOrder(int x){
	if (x==-1)
		return;
	inOrder(a[x][0]);
	cout<<(char)(x+'A');
	inOrder(a[x][1]);
}

void postOrder(int x){
	if (x==-1)
		return;
	
	postOrder(a[x][0]);
	postOrder(a[x][1]);
	cout<<(char)(x+'A');	
}

int main(){
	int n;
	cin >>n;
	for(int i=1;i<=n;i++){

		char x,y,z;
		cin >> x >> y>>z;

		x = x-'A';

		if(y=='.'){
			a[x][0] = -1;
		}else{
			a[x][0] = y-'A';
		}

		if(z=='.'){
			a[x][1] = -1;
		}else{
			a[x][1] = z-'A';
		}

	}

	preOrder(0);
	cout<<'\n';

	inOrder(0);
	cout<<'\n';

	postOrder(0);
	cout<<'\n';

	return 0;
}