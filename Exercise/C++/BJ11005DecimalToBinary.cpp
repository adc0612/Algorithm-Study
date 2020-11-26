#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string convert(int n, int b){
	//������ ���� ��Ʈ������
	string ans = "";
	//n�� 0�� �ƴҶ� ���� �����ش�.
	while(n!=0){
		//n�� b�� ������ �������� r�� �����Ѵ�.
		int r = n%b;
		//���� �������� 10���� ������ character�� ��ȯ�� �׼��ڸ� ans�� �־��ش�.
		if( r<10){
			ans += (char)(r+'0');
		}else{
			//���� �������� 10�̻��̸� �빮�� A���� ǥ���ؾ� �ǹǷ� char�� ��ȯ�� A���� ī��Ʈ�ؼ� �ش� ���ĺ��� ���� �ִ´�.
			ans += (char)(r+'A');
		}
		n/=b;
	}
	//���� �Ųٷ� ������ ������Ѵ�.
	reverse(ans.begin(),ans.end());
	return ans;
}

int main(){
	int n, b;
	cin >> n >> b;
	cout<<convert(n,b);
}