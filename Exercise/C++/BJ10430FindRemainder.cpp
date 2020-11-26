#include<iostream>
using namespace std;

int main(){
	int a, b, c;
	cin >>a>>b>>c;
	
	double ans1 = (a+b)%c;
	double ans2 = (a%c + b%c)%c;
	double ans3 = (a*b)%c;
	double ans4 = (a%c * b%c)%c;

	cout << ans1 <<ans2<<ans3<<ans4;
}